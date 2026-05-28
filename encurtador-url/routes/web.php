<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UrlController;

Route::get('/{code}', [UrlController::class, 'redirect']);


