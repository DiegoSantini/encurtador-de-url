import React from "react";

export default function UrlShortenerApp() {

  const API_URL = "http://127.0.0.1:8000/api/urls";

  const [principalUrl, setPrincipalUrl] = React.useState("");
  const [urls, setUrls] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);

  async function carregarUrls() {

    try {

      const response = await fetch(API_URL, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setUrls(data);

    } catch (error) {

      console.error(error);

      alert("Erro ao carregar URLs");

    }
  }

  React.useEffect(() => {

    carregarUrls();

  }, []);

  async function salvarUrl(e) {

    e.preventDefault();

    if (!principalUrl.trim()) {
      return;
    }

    setLoading(true);

    try {

      const method = editingId
        ? "PUT"
        : "POST";

      const endpoint = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const response = await fetch(endpoint, {

        method,

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          url_principal: principalUrl,
        }),

      });

      if (!response.ok) {
        throw new Error();
      }

      setPrincipalUrl("");
      setEditingId(null);

      await carregarUrls();

    } catch (error) {

      console.error(error);

      alert("Erro ao salvar URL");

    } finally {

      setLoading(false);

    }
  }

  async function deletarUrl(id) {

    const confirmar = window.confirm(
      "Deseja realmente remover esta URL?"
    );

    if (!confirmar) return;

    try {

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      await carregarUrls();

    } catch (error) {

      console.error(error);

      alert("Erro ao deletar URL");

    }
  }

  function editarUrl(url) {

    setPrincipalUrl(url.url_principal);

    setEditingId(url.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function cancelarEdicao() {

    setPrincipalUrl("");

    setEditingId(null);
  }

  return (

    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-4">
            Encurtador de URL
          </h1>

          <p className="text-slate-500 text-lg md:text-xl">
            CRUD completo consumindo API Laravel
          </p>

        </div>

        {/* CARD */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 p-6 md:p-8">

          {/* FORM */}
          <form
            onSubmit={salvarUrl}
            className="flex flex-col lg:flex-row gap-4 mb-10"
          >

            <input
              type="url"
              placeholder="https://google.com"
              value={principalUrl}
              onChange={(e) =>
                setPrincipalUrl(e.target.value)
              }
              required
              className="
                flex-1
                border
                border-slate-300
                rounded-2xl
                px-5
                py-4
                text-lg
                outline-none
                focus:ring-4
                focus:ring-blue-200
                transition
              "
            />

            <div className="flex gap-3">

              <button
                type="submit"
                disabled={loading}
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  disabled:opacity-70
                  transition
                  text-white
                  rounded-2xl
                  px-8
                  py-4
                  font-semibold
                  shadow-lg
                  shadow-blue-200
                  whitespace-nowrap
                "
              >

                {loading
                  ? "Salvando..."
                  : editingId
                  ? "Atualizar"
                  : "Encurtar URL"}

              </button>

              {editingId && (

                <button
                  type="button"
                  onClick={cancelarEdicao}
                  className="
                    bg-slate-200
                    hover:bg-slate-300
                    transition
                    rounded-2xl
                    px-6
                    py-4
                    font-semibold
                  "
                >
                  Cancelar
                </button>

              )}

            </div>

          </form>

          {/* TABELA */}
          <div className="overflow-x-auto rounded-2xl">

            <table className="w-full min-w-[900px]">

              <thead>

                <tr className="bg-slate-100 text-slate-700">

                  <th className="p-5 text-left rounded-l-2xl">
                    ID
                  </th>

                  <th className="p-5 text-left">
                    URL Original
                  </th>

                  <th className="p-5 text-left">
                    Código
                  </th>

                  <th className="p-5 text-left">
                    URL Curta
                  </th>

                  <th className="p-5 text-left rounded-r-2xl">
                    Ações
                  </th>

                </tr>

              </thead>

              <tbody>

                {urls.length === 0 && (

                  <tr>

                    <td
                      colSpan="5"
                      className="
                        text-center
                        p-16
                        text-slate-400
                        text-lg
                      "
                    >
                      Nenhuma URL cadastrada.
                    </td>

                  </tr>

                )}

                {urls.map((url) => (

                  <tr
                    key={url.id}
                    className="
                      border-b
                      border-slate-100
                      hover:bg-slate-50
                      transition
                    "
                  >

                    <td className="p-5 font-bold text-slate-700">
                      #{url.id}
                    </td>

                    <td className="p-5 max-w-sm">

                      <div className="truncate text-slate-600">
                        {url.url_principal}
                      </div>

                    </td>

                    <td className="p-5">

                      <span
                        className="
                          bg-slate-100
                          px-4
                          py-2
                          rounded-xl
                          text-sm
                          font-semibold
                        "
                      >
                        {url.codigo_curto}
                      </span>

                    </td>

                    <td className="p-5">

                      <a
                        href={`http://127.0.0.1:8000/${url.codigo_curto}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          text-blue-600
                          hover:text-blue-800
                          hover:underline
                          font-medium
                        "
                      >
                        {`http://127.0.0.1:8000/${url.codigo_curto}`}
                      </a>

                    </td>

                    <td className="p-5">

                      <div className="flex gap-3">

                        <button
                          onClick={() => editarUrl(url)}
                          className="
                            bg-amber-400
                            hover:bg-amber-500
                            transition
                            text-white
                            px-5
                            py-2
                            rounded-xl
                            text-sm
                            font-semibold
                            shadow
                          "
                        >
                          Editar
                        </button>

                        <button
                          onClick={() =>
                            deletarUrl(url.id)
                          }
                          className="
                            bg-red-500
                            hover:bg-red-600
                            transition
                            text-white
                            px-5
                            py-2
                            rounded-xl
                            text-sm
                            font-semibold
                            shadow
                          "
                        >
                          Excluir
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );
}
