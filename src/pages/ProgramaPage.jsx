import { useState } from 'react'
import { CRONOGRAMA } from '../config/constants'
import { Link } from 'react-router-dom'

export default function ProgramaPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Programa y Cronograma del Evento
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          Explora las ponencias, talleres y mesas de trabajo programadas para los 3 días de congreso en Arequipa.
        </p>

        {/* Tabs de Días */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {CRONOGRAMA.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {item.dia}
            </button>
          ))}
        </div>

        {/* Lista de Actividades del Día Seleccionado */}
        <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-left space-y-6">
          <h2 className="text-2xl font-bold text-gold-400 border-b border-white/10 pb-4">
            {CRONOGRAMA[activeTab].dia} ({CRONOGRAMA[activeTab].fecha})
          </h2>

          <div className="space-y-4">
            {CRONOGRAMA[activeTab].actividades.map((act, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gold-500/50 transition-all"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                    {act.hora}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">{act.evento}</h3>
                  <p className="text-xs text-gray-400">Expositor: <span className="text-gray-200">{act.expositor}</span></p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-gray-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                    📍 {act.sala}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/inscripcion"
              className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg"
            >
              Inscríbete ahora para asistir
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
