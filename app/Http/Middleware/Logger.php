<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

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
        return $next($request);
    }
}