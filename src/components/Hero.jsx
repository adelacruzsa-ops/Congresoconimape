import { LINK_FORM, EVENT_DETAILS } from '../config/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/imagenes/hero-conimape-2026.mp4" type="video/mp4" />
      </video>

      {/* Capa de superposición con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85 z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-white flex flex-col items-center">
        <p className="text-gold-500 tracking-[0.3em] text-sm md:text-lg font-semibold uppercase mb-6 drop-shadow">
          {EVENT_DETAILS.slogan}
        </p>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-none mb-6">
          II CONIMAPE <span className="text-gold-500">{EVENT_DETAILS.title.split(' ')[2] || '2026'}</span>
        </h1>

        <h2 className="text-lg md:text-3xl font-light tracking-wide leading-relaxed max-w-3xl mb-8 text-gray-200">
          II Congreso Internacional de la
          <br className="hidden md:block" />
          Pequeña Minería y Minería Artesanal
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <span className="px-6 py-3 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-sm md:text-base font-medium">
            {EVENT_DETAILS.date}
          </span>
          <span className="px-6 py-3 rounded-full border border-white/30 bg-black/30 backdrop-blur-md text-sm md:text-base font-medium">
            {EVENT_DETAILS.location}
          </span>
        </div>

        <a
          href={LINK_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-500 hover:bg-gold-300 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:-translate-y-1 transition-all duration-300"
        >
          Inscríbete ahora
        </a>

        <div className="mt-12 text-xs md:text-sm tracking-[0.2em] text-gray-300 opacity-80 animate-bounce">
          <span className="block text-xl mb-1">↓</span>
          Descubre CONIMAPE
        </div>
      </div>
    </section>
  )
}
