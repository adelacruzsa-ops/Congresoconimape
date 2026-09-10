import { BENEFICIOS } from '../config/constants'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 px-6 md:px-12 bg-dark-bg text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          ¿Por qué participar en CONIMAPE 2026?
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
          Una experiencia diseñada para fortalecer conocimientos, generar oportunidades y conectar a los principales actores de la pequeña minería y minería artesanal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFICIOS.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center flex flex-col justify-start items-center group hover:border-gold-500 hover:bg-gradient-to-b hover:from-white/10 hover:to-white/5 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="text-4xl text-white mb-6 group-hover:text-gold-300 group-hover:scale-110 transition-all duration-300">
                <i className={item.iconoClass}></i>
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-4 min-h-[56px] flex items-center justify-center">
                {item.titulo}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
