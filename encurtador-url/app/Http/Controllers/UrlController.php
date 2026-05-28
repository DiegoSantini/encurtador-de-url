<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\ValidaUrlRequest;

class UrlController extends Controller
{
     public function index()
    {
        return response()->json(
            Url::latest()->get()
        );
    }

    public function store(ValidaUrlRequest $request)
    {
        $shortCode = Str::random(6);

        $url = Url::create([
            'url_principal' => $request->url_principal,
            'codigo_curto' => $shortCode
        ]);

        return response()->json([
            'message' => 'URL encurtada criada com sucesso',
            'data' => $url,
            'short_url' => url($shortCode)
        ], 201);
    }

    public function show(Url $url)
    {
        return response()->json($url);
    }

    public function update(ValidaUrlRequest $request, Url $url)
    {
        $url->update([
            'url_principal' => $request->url_principal
        ]);

        return response()->json([
            'message' => 'URL atualizada com sucesso',
            'data' => $url
        ]);
    }

    public function destroy(Url $url)
    {
        $url->delete();

        return response()->json([
            'message' => 'URL removida com sucesso'
        ]);
    }

    public function redirect($code)
    {
        $url = Url::where('codigo_curto', $code)
            ->firstOrFail();

        return redirect($url->url_principal);
    }
}
