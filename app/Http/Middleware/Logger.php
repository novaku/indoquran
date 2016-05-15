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
        $agent = new Agent();
        $logVisitor = new LogVisitor();

        $maxId = intval($logVisitor->max('VisID'));
        $maxId++;

        $logVisitor->VisID = $maxId;
        $logVisitor->VisIP = $request->getClientIp();
        $logVisitor->VisRef = $request->server('HTTP_REFERER');
        $logVisitor->VisUrl = $request->server('REQUEST_URI');
        $logVisitor->VisDate = date('Y-m-d H:i:s');
        $logVisitor->VisAgent = $agent->browser() . '/' . $agent->version($agent->browser());
        $logVisitor->VisPlatform = $agent->platform() . '/' . $agent->version($agent->platform());
        $logVisitor->VisAgentString = $agent->getUserAgent();

        $logVisitor->save();

        return $next($request);
    }
}