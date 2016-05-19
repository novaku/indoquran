<?php

namespace App\Http\Middleware;

use App\Http\Model\LogVisitor;
use Closure;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

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
        session_unset();

        $clientIp = $request->getClientIp();
        if ((!isset($_SESSION[$clientIp])) || (@!$_SESSION[$clientIp])) {
            $agent = new Agent();
            $logVisitor = new LogVisitor();

            $maxId = intval($logVisitor->max('VisID'));
            $maxId++;

            //https://ipfind.co/?ip=202.62.16.202&auth=fbaffddb-9250-4200-b402-de3a1d84bb1a
            $request_uri = 'https://ipfind.co';
            $ip_address = $clientIp;
            $auth = 'fbaffddb-9250-4200-b402-de3a1d84bb1a';
            $url = $request_uri . "?ip=" . $ip_address . "&auth=" . $auth;
            $document = file_get_contents($url);
            $tracker = json_decode($document);

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
            $logVisitor->tracker = $tracker;

            $logVisitor->save();

            $_SESSION[$clientIp] = true;
        }

        return $next($request);
    }
}