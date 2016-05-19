<?php

namespace App\Http\Middleware;

use App\Http\Model\LogVisitor;
use Closure;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;
use Log;

class Logger
{
    /**
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        session_start();
        $clientIp = $request->getClientIp();
        if ((!isset($_SESSION[$clientIp])) || (@!$_SESSION[$clientIp])) {
            $agent = new Agent();
            $logVisitor = new LogVisitor();
            //https://ipfind.co/?ip=202.62.16.202&auth=fbaffddb-9250-4200-b402-de3a1d84bb1a
            $client = new Client();

            $maxId = intval($logVisitor->max('VisID'));
            $maxId++;

            $browser = $agent->browser();
            $platform = $agent->platform();


            $logVisitor->VisID = $maxId;
            $logVisitor->VisIP = $clientIp;
            $logVisitor->VisRef = $request->server('HTTP_REFERER');
            $logVisitor->VisUrl = $request->server('REQUEST_URI');
            $logVisitor->VisDate = date('Y-m-d H:i:s');
            $logVisitor->VisAgent = $browser . '/' . $agent->version($browser);
            $logVisitor->VisPlatform = $platform . '/' . $agent->version($platform);
            $logVisitor->VisAgentString = $agent->getUserAgent();
            $logVisitor->tracker = $client->get('https://ipfind.co/?ip=' . $clientIp . '&auth=fbaffddb-9250-4200-b402-de3a1d84bb1a');

            $logVisitor->save();

            $_SESSION[$clientIp] = true;
        }

        return $next($request);
    }
}