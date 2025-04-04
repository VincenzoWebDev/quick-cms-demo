<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function getActiveTheme()
    {
        $activeTheme = Theme::where('active', true)->first();
        $themeName = $activeTheme ? $activeTheme->name : 'default';
        return $themeName;
    }
}
