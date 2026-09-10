import { NOTICIAS } from '../config/constants'

export default function NoticiasPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Noticias y Novedades
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Mantente informado sobre los comunicados oficiales, lanzamientos y avances del congreso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NOTICIAS.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-dark-surface border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-gold-500 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-gold-400">📅 {noticia.fecha}</span>
                  <h2 className="text-xl font-bold text-white mt-2 mb-3 leading-snug">
                    {noticia.titulo}
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {noticia.resumen}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Detalle de la noticia: ${noticia.titulo}\n\n${noticia.contenido}`)}
                  className="text-gold-400 hover:text-gold-300 font-semibold text-sm inline-flex items-center gap-2 mt-2"
                >
                  <span>Leer nota completa</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
