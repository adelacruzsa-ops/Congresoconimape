import { PONENTES, LINK_FORM } from '../config/constants'

export default function PonentesPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Ponentes y Conferencistas
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Conoce a los destacados ingenieros, investigadores y líderes que compartirán sus conocimientos en el II CONIMAPE 2026.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PONENTES.map((ponente) => (
            <div
              key={ponente.id}
              className="bg-dark-surface border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-gold-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <img
                src={ponente.foto}
                alt={ponente.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 uppercase tracking-wider">
                    {ponente.categoria}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-3 mb-1">
                    {ponente.nombre}
                  </h2>
                  <p className="text-xs text-gray-400 font-medium mb-2">
                    {ponente.cargo}
                  </p>
                  <p className="text-xs text-gold-300 font-semibold mb-4">
                    {ponente.institucion}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-300 italic">
                    🎤 "{ponente.tema}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner para postulaciones de ponentes */}
        <div className="bg-gradient-to-r from-gold-600/30 to-gold-500/20 border border-gold-500/40 p-8 rounded-3xl text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">¿Deseas participar como Ponente?</h3>
          <p className="text-gray-300 text-sm mb-6">
            Si tienes una investigación o caso de éxito sobre pequeña minería y minería artesanal, puedes postular tu tema.
          </p>
          <a
            href={LINK_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg"
          >
            Postular mi Ponencia
          </a>
        </div>
      </div>
    </div>
  )
}
