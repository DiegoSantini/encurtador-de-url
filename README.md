# ✂️ Encurtador de URL - Laravel API

API RESTful desenvolvida com Laravel para encurtamento de URLs, permitindo criação, listagem, edição, exclusão e redirecionamento de links curtos.

---

## 🚀 Tecnologias utilizadas

* PHP 8+
* Laravel 12
* PostgreSQL
* Eloquent ORM
* REST API
---

## 📌 Funcionalidades

✅ Criar URLs encurtadas

✅ Redirecionar URL curta para URL original

✅ Listar links cadastrados

✅ Editar URLs

✅ Remover URLs

✅ Geração automática de código curto

✅ Estrutura RESTful

✅ Integração com PostgreSQL


---

## 📂 Estrutura da API

| Método | Endpoint         | Descrição                 |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/urls`      | Lista todas URLs          |
| POST   | `/api/urls`      | Cria uma nova URL         |
| GET    | `/api/urls/{id}` | Exibe uma URL             |
| PUT    | `/api/urls/{id}` | Atualiza URL              |
| DELETE | `/api/urls/{id}` | Remove URL                |
| GET    | `/{code}`        | Redireciona URL encurtada |

---

# ⚙️ Como executar o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/DiegoSantini/encurtador-de-url.git
```

---

## 2. Acesse a pasta do projeto

```bash
cd encurtador-de-url
```

---

## 3. Instale as dependências

```bash
composer install
```

---

## 4. Configure o arquivo `.env`

```bash
cp .env.example .env
```

Configure as variáveis do banco:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=encurtador_url
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
```

---

## 5. Gere a chave da aplicação

```bash
php artisan key:generate
```

---

## 6. Execute as migrations

```bash
php artisan migrate
```

---

## 7. Inicie o servidor

```bash
php artisan serve
```

A aplicação estará disponível em:

```bash
http://127.0.0.1:8000
```

---

# 🧪 Exemplo de uso

## Criar URL encurtada

### Requisição

```http
POST /api/urls
```

### Body

```json
{
  "original_url": "https://google.com"
}
```

---

### Resposta

```json
{
  "short_code": "aB12Cd",
  "short_url": "http://127.0.0.1:8000/aB12Cd"
}
```

---

# 🔄 Fluxo do sistema

```text
Usuário envia URL
        ↓
API gera código curto
        ↓
Link é salvo no banco
        ↓
Usuário acessa /{code}
        ↓
Sistema redireciona para URL original
```
# 🎨 Frontend - Encurtador de URL

Interface web do sistema de encurtamento de URLs, desenvolvida para consumir a API Laravel e permitir criação e gerenciamento de links curtos de forma simples e intuitiva.

---

# 🚀 Tecnologias utilizadas

* React.js
* Vite
* Axios
* TailwindCSS
* React Router DOM

---

# 📌 Funcionalidades

✅ Criar URLs encurtadas
✅ Exibir URL original e URL curta
✅ Copiar link encurtado
✅ Listar URLs cadastradas
✅ Excluir URLs
✅ Interface responsiva
✅ Integração com API Laravel

---

# 📂 Estrutura do projeto

```bash id="0gxxgd"
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── routes/
 ├── App.jsx
 └── main.jsx
```

---

# ⚙️ Como executar o projeto

## 1. Clone o repositório

```bash id="l09vwt"
git clone https://github.com/DiegoSantini/encurtador-de-url-frontend.git
```

---

## 2. Acesse a pasta

```bash id="qv2x45"
cd encurtador-de-url-frontend
```

---

## 3. Instale as dependências

```bash id="r6s2qw"
npm install
```

---

## 4. Configure a URL da API

Crie o arquivo `.env`:

```env id="8d3w3e"
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## 5. Execute o projeto

```bash id="5aqx1r"
npm run dev
```

O frontend estará disponível em:

```bash id="4xg1ul"
http://localhost:5173
```

---

# 🔌 Integração com Backend

O frontend consome a API Laravel responsável por:

* Criar URLs encurtadas
* Buscar links cadastrados
* Excluir URLs
* Realizar redirecionamentos

Backend:

```bash id="3rbq3t"
http://127.0.0.1:8000/api
```

---

# 🧪 Exemplo de uso

## Criar URL

O usuário informa:

```text id="mz0c0r"
https://google.com
```

O sistema retorna:

```text id="nj14m8"
http://127.0.0.1:8000/aB12Cd
```



# 👨‍💻 Autor

Desenvolvido por Diego Santos

GitHub: https://github.com/DiegoSantini

---

# 📄 Licença

Este projeto está sob a licença MIT.
