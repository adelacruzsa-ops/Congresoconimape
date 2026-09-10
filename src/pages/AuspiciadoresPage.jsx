import { AUSPICIADORES, WHATSAPP_NUMBER } from '../config/constants'

export default function AuspiciadoresPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo recibir información sobre los paquetes de auspicio para el II CONIMAPE 2026.')}`

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Auspiciadores y Aliados Estratégicos
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Agradecemos el respaldo de las empresas e instituciones que hacen posible la realización del II CONIMAPE 2026.
        </p>

        {/* Categoría Platino */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gold-400 mb-6 uppercase tracking-wider">Auspiciadores Platino</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {AUSPICIADORES.platino.map((item, idx) => (
              <div key={idx} className="bg-dark-surface border border-gold-500/40 p-8 rounded-3xl flex items-center justify-center gap-4 hover:border-gold-500 transition-all shadow-xl">
                <img src={item.logo} alt={item.nombre} className="h-12 object-contain" />
                <span className="text-lg font-bold text-white">{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categoría Oro */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 uppercase tracking-wider">Auspiciadores Oro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {AUSPICIADORES.oro.map((item, idx) => (
              <div key={idx} className="bg-dark-surface border border-white/10 p-6 rounded-2xl flex items-center justify-center gap-4 hover:border-white/30 transition-all">
                <img src={item.logo} alt={item.nombre} className="h-10 object-contain" />
                <span className="text-base font-semibold text-gray-200">{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Aliados Institucionales */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-300 mb-6 uppercase tracking-wider">Aliados Institucionales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {AUSPICIADORES.aliados.map((item, idx) => (
              <div key={idx} className="bg-dark-surface border border-white/10 p-6 rounded-2xl flex items-center justify-center gap-4">
                <img src={item.logo} alt={item.nombre} className="h-10 object-contain" />
                <span className="text-base font-medium text-gray-300">{item.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Comercial */}
        <div className="bg-gradient-to-r from-gold-600 to-gold-500 p-10 rounded-3xl text-white max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-extrabold mb-3">¿Quieres posicionar tu marca en el II CONIMAPE 2026?</h3>
          <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
            Solicita el Dossier Comercial y descubre los beneficios exclusivos para auspiciadores (stands en feria, conferencias comerciales, branding).
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-xl"
          >
            <i className="fa-brands fa-whatsapp text-green-400 text-xl"></i>
            <span>Solicitar Dossier por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
