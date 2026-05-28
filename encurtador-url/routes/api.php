<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UrlController;

Route::get('/', function () {
    return 'API Encurtador funcionando';
});

Route::apiResource('urls', UrlController::class);

// Route::get('/{code}', [UrlController::class, 'redirect']);