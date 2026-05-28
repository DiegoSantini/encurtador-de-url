<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidaUrlRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'url_principal' => [
                'required',
                'url',
                'max:2048'
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'url_principal.required' => 'A URL é obrigatória.',
            'url_principal.url' => 'Informe uma URL válida.',
        ];
    }
}
