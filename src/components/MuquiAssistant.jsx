import { useState, useRef, useEffect } from 'react'
import { FAQ_MUQUI, LINK_FORM } from '../config/constants'

export default function MuquiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 ¡Hola! Soy **Muqui**, tu asistente virtual para el **II CONIMAPE 2026**. ¿En qué puedo ayudarte hoy?',
    },
  ])

  const chatContainerRef = useRef(null)

  // Auto-scroll al final del chat cuando se agrega un nuevo mensaje
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const handleSelectFaq = (faq) => {
    // 1. Agregar pregunta del usuario
    const userMsg = { id: Date.now(), sender: 'user', text: faq.pregunta }

    // 2. Agregar respuesta de Muqui
    const botMsg = { id: Date.now() + 1, sender: 'bot', text: faq.respuesta }

    setMessages((prev) => [...prev, userMsg, botMsg])
  }

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: '👋 ¡Hola de nuevo! Soy **Muqui**. Elige una pregunta para ayudarte:',
      },
    ])
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ventana Modal del Chatbot */}
      {isOpen && (
        <div className="bg-[#121212] border border-gold-500/40 rounded-3xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[480px] animate-fade-in">
          {/* Header del Chat */}
          <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 p-4 flex items-center justify-between text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/30 p-1 border border-white/20 flex items-center justify-center">
                <img
                  src="/imagenes/muqui.png"
                  alt="Muqui Asistente"
                  className="w-8 h-8 object-contain drop-shadow"
                />
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight">Muqui Bot</h4>
                <span className="text-[11px] text-white/90 font-medium">Asistente Virtual CONIMAPE</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetChat}
                className="text-white/80 hover:text-white p-1 text-xs underline"
                title="Reiniciar chat"
              >
                Limpiar
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black p-1 text-lg font-bold transition-colors"
                aria-label="Cerrar chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Feed de Conversación (Mensajes estilo Chat) */}
          <div
            ref={chatContainerRef}
            className="p-4 flex-1 overflow-y-auto space-y-3.5 bg-black/60 text-left text-xs"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <img
                    src="/imagenes/muqui.png"
                    alt="Muqui"
                    className="w-7 h-7 object-contain self-end mb-1"
                  />
                )}
                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gold-500 text-white font-medium rounded-br-none'
                      : 'bg-white/10 text-gray-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Opciones de Preguntas Frecuentes al final */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <p className="text-[11px] text-gray-400 font-semibold mb-1">Preguntas sugeridas:</p>
              {FAQ_MUQUI.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectFaq(item)}
                  className="w-full text-left bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500 text-gold-400 p-2.5 rounded-xl transition-all duration-200 text-xs font-medium"
                >
                  ❓ {item.pregunta}
                </button>
              ))}
            </div>
          </div>

          {/* Footer del Chat con Botón de Inscripción */}
          <div className="p-3 bg-[#181818] border-t border-white/10 text-center">
            <a
              href={LINK_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold-500 hover:bg-gold-400 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md"
            >
              Inscríbete aquí en el formulario
            </a>
          </div>
        </div>
      )}

      {/* Botón Flotante para Abrir Chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-bold px-4 py-3 rounded-full shadow-2xl shadow-gold-500/40 hover:-translate-y-1 transition-all duration-300 group"
      >
        <img
          src="/imagenes/muqui.png"
          alt="Muqui"
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
        />
        <span className="hidden sm:inline text-xs font-semibold">¿Dudas? Habla con Muqui</span>
      </button>
    </div>
  )
}
