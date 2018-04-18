<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->is('api/*')) { // api/albums , api/list
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET,POST');
            header('Access-Control-Allow-Headers: Content-Type');

        }
        return $next($request);
    }
}
