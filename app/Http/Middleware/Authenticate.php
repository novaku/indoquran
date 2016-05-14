<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Authenticate
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->header('Authorization'))
        {
            $token = explode(' ', $request->header('Authorization'))[1];
            $payload = (array) JWT::decode($token, getenv('TOKEN_SECRET'), array('HS256'));

            if ($payload['exp'] < time())
            {
                return response()->json(['message' => 'Token has expired']);
            }

            $request['user'] = $payload;

            return $next($request);
        }
        else
        {
            return response()->json(['message' => 'Please make sure your request has an Authorization header'], 401);
        }
    }
}
