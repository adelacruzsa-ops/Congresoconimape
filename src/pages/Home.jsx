import Hero from '../components/Hero'
import Countdown from '../components/Countdown'
import About from '../components/About'
import Topics from '../components/Topics'
import Audience from '../components/Audience'
import Benefits from '../components/Benefits'
import LocationMap from '../components/LocationMap'
import { PONENTES, AUSPICIADORES, ESTADISTICAS_EVENTO, LINK_FORM } from '../config/constants'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />

      {/* Sección de Impacto e Inscritos */}
      <section className="py-16 px-6 bg-gradient-to-b from-black/80 to-dark-bg border-y border-white/10 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            COMUNIDAD EN CRECIMIENTO
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            El Encuentro Minero del Año en Números
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12">
            Mineros artesanales, profesionales, estudiantes y delegaciones de todo el país se suman día a día al II CONIMAPE 2026.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ESTADISTICAS_EVENTO.map((stat) => (
              <div
                key={stat.id}
                className="bg-dark-surface/90 border border-amber-500/20 p-6 rounded-3xl text-center shadow-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mx-auto mb-4 border border-amber-500/20">
                  <i className={stat.icono}></i>
                </div>
                <span className="block text-3xl md:text-5xl font-extrabold text-amber-400 mb-1">
                  {stat.numero}
                </span>
                <h3 className="text-sm md:text-base font-bold text-white mb-1">
                  {stat.titulo}
                </h3>
                <p className="text-xs text-gray-400 leading-tight">
                  {stat.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={LINK_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
            >
              <span>¡Asegura tu vacante! Inscríbete Aquí</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      <Topics />

      {/* Call To Action de Ponentes y Conferencistas */}
      <section className="py-20 px-6 bg-dark-bg text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-10 md:p-14 rounded-3xl border border-gold-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold mb-4 border border-gold-500/20">
              CONVOCATORIA DE PONENTES & EXPERTOS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ponentes y Conferencistas
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubre a los especialistas del sector minero que compartirán su conocimiento, o postula tu trabajo técnico para formar parte de la agenda oficial del II CONIMAPE 2026.
            </p>

            <Link
              to="/participantes?tab=ponentes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 text-sm md:text-base"
            >
              <span>Ver Lista Completa y Postular Ponencia</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <Audience />
      <Benefits />

      {/* Call To Action de Auspiciadores y Aliados */}
      <section className="py-20 px-6 bg-dark-surface text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-amber-500/5 to-transparent p-10 md:p-14 rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
              CONVOCATORIA ABIERTA A EMPRESAS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Auspiciadores y Aliados Estratégicos
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Posiciona tu empresa ante los líderes y profesionales de la pequeña minería y minería artesanal. Conoce los paquetes de patrocinio y marcas participantes.
            </p>

            <Link
              to="/participantes?tab=auspiciadores"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 text-sm md:text-base"
            >
              <span>Ver Marcas Auspiciadoras e Información de Patrocinio</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <LocationMap />
    </main>
  )
}
