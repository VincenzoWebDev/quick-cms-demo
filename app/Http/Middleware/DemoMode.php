<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class DemoMode
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!User::find(Auth::id())->isDemo()) {
            $messaggio = 'Non sei autorizzato a accedere';
            $tipoMessaggio = 'danger';
            session()->flash('message', ['tipo' => $tipoMessaggio, 'testo' => $messaggio]);

            return redirect()->back();
        }
        return $next($request);
    }
}
