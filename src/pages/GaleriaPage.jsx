import { GALERIA_FOTOS } from '../config/constants'

export default function GaleriaPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Galería de la I Edición
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Revive las mejores imágenes y recuerdos del primer Congreso Internacional de la Pequeña Minería y Minería Artesanal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALERIA_FOTOS.map((foto) => (
            <div
              key={foto.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black"
            >
              <img
                src={foto.url}
                alt={foto.titulo}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-base">{foto.titulo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
