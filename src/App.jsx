import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MuquiAssistant from './components/MuquiAssistant'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import ProgramaPage from './pages/ProgramaPage'
import PonentesPage from './pages/PonentesPage'
import AuspiciadoresPage from './pages/AuspiciadoresPage'
import NoticiasPage from './pages/NoticiasPage'
import GaleriaPage from './pages/GaleriaPage'

// Helper para hacer scroll arriba al cambiar de página
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-white font-montserrat flex flex-col justify-between">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programa" element={<ProgramaPage />} />
            <Route path="/ponentes" element={<PonentesPage />} />
            <Route path="/auspiciadores" element={<AuspiciadoresPage />} />
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
          </Routes>
        </div>

        {/* Widgets Flotantes de interacción permanente */}
        <MuquiAssistant />
        <WhatsAppButton />

        <Footer />
      </div>
    </Router>
  )
}
