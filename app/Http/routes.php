<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/**
 * To handle view usage, using desktop or mobile
 */

$app->group([
    'middleware' => [
        'logger',
        //        'auth',
    ],
//    'prefix'     => 'api',
//    'namespace'  => 'App\Http\Controllers',
], function ($app) {
    $app->get('/', function () use ($app) {
        $detect = new Jenssegers\Agent\Agent();

        if ($detect->isMobile() || $detect->isTablet()) {
            $view = 'mobile';
        } else {
            $view = 'desktop';
        }

        $parser = \WyriHaximus\HtmlCompress\Factory::construct();
        $htmlView = view($view, ['browser' => $detect->getUserAgent()]);

        return $parser->compress($htmlView);
    });

    $app->get('quran', 'Desktop\Read@index');
});