import Hero from '../components/Hero'
import Countdown from '../components/Countdown'
import About from '../components/About'
import Topics from '../components/Topics'
import Audience from '../components/Audience'
import Benefits from '../components/Benefits'
import LocationMap from '../components/LocationMap'
import { PONENTES, AUSPICIADORES, LINK_FORM } from '../config/constants'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />
      <Topics />

      {/* Preview de Ponentes en Inicio */}
      <section className="py-20 px-6 bg-dark-bg text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ponentes Destacados</h2>
          <p className="text-gray-300 text-base md:text-lg mb-12">
            Contaremos con la presencia de reconocidos especialistas nacionales e internacionales.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {PONENTES.slice(0, 4).map((ponente) => (
              <div key={ponente.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500 transition-all duration-300">
                <img src={ponente.foto} alt={ponente.nombre} className="w-full h-48 object-cover" />
                <div className="p-5 text-left">
                  <span className="text-xs text-gold-400 uppercase font-semibold">{ponente.categoria}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{ponente.nombre}</h3>
                  <p className="text-xs text-gray-400">{ponente.cargo}</p>
                  <p className="text-xs text-gray-300 mt-2 font-medium">{ponente.institucion}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/ponentes"
            className="inline-block bg-white/10 hover:bg-gold-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Ver todos los ponentes →
          </Link>
        </div>
      </section>

      <Audience />
      <Benefits />

      {/* Preview de Auspiciadores */}
      <section className="py-16 px-6 bg-dark-surface text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Auspiciadores Principales</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-80">
            {AUSPICIADORES.platino.map((asp, idx) => (
              <div key={idx} className="bg-white/5 px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3">
                <img src={asp.logo} alt={asp.nombre} className="h-8 object-contain" />
                <span className="text-sm font-semibold text-gray-200">{asp.nombre}</span>
              </div>
            ))}
          </div>
          <Link to="/auspiciadores" className="text-gold-400 hover:underline text-sm font-semibold">
            ¿Deseas auspiciar CONIMAPE 2026? Haz clic aquí
          </Link>
        </div>
      </section>

      <LocationMap />
    </main>
  )
}
