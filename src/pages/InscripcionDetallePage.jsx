import React from 'react'
import { LINKS_INSCRIPCION, WHATSAPP_NUMBER } from '../config/constants'
import {
  User,
  Users,
  Building2,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  HelpCircle,
  PhoneCall,
  Clock,
  MapPin,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function InscripcionDetallePage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, tengo dudas sobre el proceso de pago e inscripción para el II CONIMAPE 2026.')}`
  const whatsappCastillo = `https://wa.me/51967708910?text=${encodeURIComponent('Hola Christopher Castillo, me comunico para consultas sobre mi inscripción al CONIMAPE 2026.')}`

  const tiposInscripcion = [
    {
      id: 'individual',
      titulo: 'Inscripción Individual',
      subtitulo: 'Para profesionales, mineros y estudiantes que asisten de manera personal.',
      icono: User,
      color: 'from-amber-500/20 to-amber-600/10 border-amber-500/40',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      btnColor: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black',
      link: LINKS_INSCRIPCION.individual,
      precios: [
        { cat: 'Público General', precio: 'S/ 80.00' },
        { cat: 'Ingenieros CIP', precio: 'S/ 70.00' },
        { cat: 'Estudiantes Pregrado', precio: 'S/ 50.00' },
      ],
      destacado: false,
    },
    {
      id: 'grupal',
      titulo: 'Inscripción Grupal',
      subtitulo: '¡Aprovecha el descuento especial para delegaciones de 5 personas!',
      icono: Users,
      color: 'from-amber-500/30 via-amber-950/40 to-dark-surface border-amber-400 shadow-2xl shadow-amber-500/20',
      badgeColor: 'bg-amber-400 text-black font-extrabold',
      btnColor: 'bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/20',
      link: LINKS_INSCRIPCION.grupal,
      badgeText: '¡AHORRA MÁS! (5 PERSONAS)',
      precios: [
        { cat: 'Público General (c/u)', precio: 'S/ 60.00' },
        { cat: 'Ingenieros CIP (c/u)', precio: 'S/ 50.00' },
        { cat: 'Estudiantes (c/u)', precio: 'S/ 30.00' },
      ],
      destacado: true,
    },
    {
      id: 'corporativa',
      titulo: 'Inscripción Corporativa',
      subtitulo: 'Registro exclusivo para empresas e instituciones que registran a sus trabajadores.',
      icono: Building2,
      color: 'from-blue-900/20 to-amber-600/10 border-blue-500/30',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      btnColor: 'bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-500 hover:to-amber-400 text-white',
      link: LINKS_INSCRIPCION.corporativa,
      badgeText: 'PARA EMPRESAS',
      precios: [
        { cat: 'Facturación / Planilla', precio: 'Consultar' },
        { cat: 'Atención Personalizada', precio: 'Incluido' },
      ],
      destacado: false,
    },
  ]

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Banner de Cabecera */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-4 border border-amber-500/20">
            <Sparkles size={16} />
            <span>GUÍA DETALLADA DE INSCRIPCIÓN Y MEDIOS DE PAGO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Proceso de Inscripción <span className="text-amber-400">CONIMAPE 2026</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Sigue las instrucciones a continuación para realizar tu pago correctamente y registrar tus datos en el formulario oficial.
          </p>

          {/* Card Alerta Preventa */}
          <div className="mt-8 max-w-2xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center justify-center gap-3 text-amber-300 text-sm font-medium">
            <Calendar className="shrink-0 text-amber-400" size={20} />
            <span>¡Tarifas de Inscripción Anticipada vigentes hasta el <strong>05 de Octubre</strong>!</span>
          </div>
        </div>

        {/* 1. SECCIÓN DE SELECCIÓN DE FORMULARIOS */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Paso 1: Selecciona tu Tipo de Inscripción
            </h2>
            <p className="text-gray-400 text-sm">
              Haz clic en la opción que corresponda para ir al formulario directo de registro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiposInscripcion.map((tipo) => {
              const IconComp = tipo.icono
              return (
                <div
                  key={tipo.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-dark-surface border transition-all duration-300 hover:-translate-y-1 ${tipo.color}`}
                >
                  {tipo.badgeText && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs tracking-wider border shadow-lg ${tipo.badgeColor}`}>
                      {tipo.badgeText}
                    </div>
                  )}

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20">
                      <IconComp size={28} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{tipo.titulo}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                      {tipo.subtitulo}
                    </p>

                    {/* Tarifario */}
                    <div className="space-y-2 mb-8 bg-black/40 p-4 rounded-2xl border border-white/5">
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Tarifas Promocionales</p>
                      {tipo.precios.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs text-gray-300 py-1 border-b border-white/5 last:border-0">
                          <span>{item.cat}:</span>
                          <span className="font-bold text-white text-sm">{item.precio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href={tipo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 px-4 rounded-full transition-all duration-300 ${tipo.btnColor}`}
                    >
                      <span>Llenar Formulario</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2. SECCIÓN DETALLADA DE MEDIOS DE PAGO (BASADA EN LAS IMÁGENES DE PUBLIC/INSCRIPCION) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20">
              PASO 2: REALIZA TU PAGO
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Cuentas Bancarias y Agentes Autorizados
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Realiza la transferencia o depósito en las cuentas oficiales del <strong>Colegio de Ingenieros del Perú - CD Arequipa</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

            {/* OPCIÓN BCP */}
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-extrabold text-xl">
                      BCP
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Banco de Crédito del Perú</h3>
                      <p className="text-xs text-amber-400 font-medium">Pago por Servicios / Código Agente</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 mb-6 flex items-start gap-3">
                  <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-amber-200">
                    <strong>IMPORTANTE BCP:</strong> BCP no cuenta con N° de cuenta directo para esta modalidad. Por cualquier operación en agente, VIABCP o BCP APP, debes adicionar <strong>S/ 1.50</strong> por concepto de comisión por transacción.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-gray-300">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">1. Agente BCP:</span>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Indicar: <em>Pago de Servicios</em></li>
                      <li>A nombre de: <strong>COLEGIO INGENIEROS AQP</strong></li>
                      <li>Código CIP CDA para el agente: <strong className="text-white text-sm bg-black/50 px-2 py-0.5 rounded">14913</strong></li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">2. BCP APP Móvil:</span>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Seleccionar: <em>Pagar servicios</em></li>
                      <li>Buscar: <strong>Colegio Ingenieros AQP</strong></li>
                      <li>Opción: <em>Pago cuota mensual</em></li>
                      <li>Ingresar código de servicio: N° CIP o DNI (si no es Ingeniero)</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">3. Por Internet (www.viabcp.com):</span>
                    <p className="text-gray-300">Pagos &gt; Pagar un servicio &gt; Buscar: <strong>Colegio de Ingenieros - Arequipa</strong> &gt; Pagos cuota mensual.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OPCIÓN SCOTIABANK */}
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-extrabold text-xl">
                      SCO
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Scotiabank</h3>
                      <p className="text-xs text-amber-400 font-medium">Cuenta Corriente y CCI</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6 space-y-2">
                  <div>
                    <span className="text-xs text-gray-400 block">Cuenta Corriente (Soles):</span>
                    <span className="text-base font-extrabold text-white tracking-wider select-all">000 - 1319957</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">CCI (Código Cuenta Interbancario):</span>
                    <span className="text-sm sm:text-base font-extrabold text-amber-400 tracking-wider select-all">009-310-000001319957-45</span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 mb-6 flex items-start gap-3">
                  <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={18} />
                  <div className="text-xs text-amber-200 space-y-1">
                    <p><strong>Comisiones Scotiabank:</strong></p>
                    <p>• En agente o Scotiabank APP adiciona <strong>S/ 1.00</strong> por comisión.</p>
                    <p>• Si estás fuera de Arequipa y depositas en agente o ventanilla, adiciona <strong>S/ 7.50</strong> (Comisión Interplaza).</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-amber-400 block mb-1">Vía APP / WEB (mi.scotiabank.com.pe):</span>
                  <p>Pagar servicios / instituciones &gt; Buscar: <strong>Colegio de Ingenieros - Arequipa</strong> &gt; Ingresar Monto, CIP/DNI, Nombre del Ingeniero y Referencia.</p>
                </div>
              </div>
            </div>

          </div>

          {/* OTRAS MODALIDADES Y PRESENCIAL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* PAGOS EN CAJA CIP CDA */}
            <div className="bg-dark-surface/80 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <MapPin size={22} />
                </div>
                <h4 className="text-base font-bold text-white">Pagos en Caja CIP CDA</h4>
              </div>
              <ul className="text-xs text-gray-300 space-y-2">
                <li><strong>Sede principal:</strong> Av. Independencia N° 150, Cercado</li>
                <li><strong>Sede Casa del Ingeniero:</strong> Calle Consuelo N° 306</li>
                <li><strong>Horario:</strong> Lun - Vie: 9:00am - 1:00pm y 3:30pm - 8:00pm. Sáb: 9:00am - 1:00pm</li>
              </ul>
            </div>

            {/* CONSIDERACIONES IMPORTANTES */}
            <div className="bg-dark-surface/80 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="text-base font-bold text-white">Consideraciones</h4>
              </div>
              <ul className="text-xs text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Verifique que la cuenta figure a nombre del CIP Arequipa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Conserve su váucher de pago para subirlo al formulario.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Ante cualquier consulta comuníquese con la organización.</span>
                </li>
              </ul>
            </div>

            {/* CONTACTO DIRECTO */}
            <div className="bg-dark-surface/80 border border-amber-500/20 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <PhoneCall size={22} />
                  </div>
                  <h4 className="text-base font-bold text-white">Contacto de Inscripciones</h4>
                </div>
                <p className="text-xs text-gray-300 mb-1">Coordinador de Registro:</p>
                <p className="text-sm font-bold text-amber-400">Christopher Castillo</p>
                <p className="text-base font-extrabold text-white mb-4">+51 942 503 614 / +51 967 708 910</p>
              </div>

              <a
                href={whatsappCastillo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all"
              >
                <span>Consultar por WhatsApp</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>

        </div>

        {/* 3. IMÁGENES AFICHES ORIGINALES (ACCESIBLES Y AMPLIABLES EN VENTANA NUEVA) */}
        <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 sm:p-10 text-center mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Afiches Oficiales de Inscripción y Pagos
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-8 max-w-xl mx-auto">
            Puedes hacer clic en cualquiera de las afiches originales para abrirlas en tamaño completo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="/inscripcion/inscripcion2.jpeg" target="_blank" rel="noopener noreferrer" className="group block relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400 transition-all">
              <img src="/inscripcion/inscripcion2.jpeg" alt="Inscripción Anticipada Tarifas" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm gap-2">
                <span>Ver Imagen Completa</span>
                <ExternalLink size={16} />
              </div>
            </a>

            <a href="/inscripcion/inscripcion1.jpeg" target="_blank" rel="noopener noreferrer" className="group block relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400 transition-all">
              <img src="/inscripcion/inscripcion1.jpeg" alt="Medios de Pago CIP Arequipa" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm gap-2">
                <span>Ver Imagen Completa</span>
                <ExternalLink size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* FOOTER CTA DUDAS */}
        <div className="text-center">
          <p className="text-gray-300 text-sm mb-4">¿Tienes alguna duda adicional sobre tu comprobante o facturación corporativa?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm hover:underline"
          >
            <HelpCircle size={18} />
            <span>Hablar con un asesor de soporte por WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  )
}
