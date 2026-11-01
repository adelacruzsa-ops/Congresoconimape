import { useRef, useState } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-filas.css'

// Filas deslizables tipo catálogo: una fila por jornada. Al tocar un póster se despliega su detalle.
// Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles', fecha: '4 de noviembre' },
  { num: 5, nombre: 'Jueves', fecha: '5 de noviembre' },
  { num: 6, nombre: 'Viernes', fecha: '6 de noviembre' },
]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Foto({ p }) {
  return p.foto ? <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" draggable="false" /> : (<><Contornos id={p.id} /><span className="pf-ini" aria-hidden="true">{iniciales(p)}</span></>)
}

function Fila({ jornada, abierto, setAbierto }) {
  const lista = PONENTES.filter((p) => p.diaNum === jornada.num)
  const pista = useRef(null)
  const arrastre = useRef({ activo: false, x: 0, sl: 0, movio: false })
  const sel = lista.find((p) => p.id === abierto)

  const mover = (d) => pista.current.scrollBy({ left: d * Math.max(260, pista.current.clientWidth * 0.7), behavior: 'smooth' })
  const down = (e) => {
    if (e.pointerType !== 'mouse') return
    arrastre.current = { activo: true, x: e.clientX, sl: pista.current.scrollLeft, movio: false }
  }
  const move = (e) => {
    const a = arrastre.current
    if (!a.activo) return
    const dx = e.clientX - a.x
    if (Math.abs(dx) > 5) a.movio = true
    pista.current.scrollLeft = a.sl - dx
  }
  const up = () => { arrastre.current.activo = false }
  const clic = (p) => { if (arrastre.current.movio) { arrastre.current.movio = false; return } setAbierto(abierto === p.id ? null : p.id) }

  return (
    <section className="pf-fila" aria-label={`Ponentes del ${jornada.nombre} ${jornada.num}`}>
      <header>
        <h3><span>{String(jornada.num).padStart(2, '0')}</span> {jornada.nombre} <em>{jornada.fecha}</em></h3>
        <div className="pf-flechas">
          <button onClick={() => mover(-1)} aria-label="Ver anteriores">‹</button>
          <button onClick={() => mover(1)} aria-label="Ver siguientes">›</button>
        </div>
      </header>

      <div className="pf-pista" ref={pista} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}>
        {lista.map((p) => (
          <button key={p.id} className="pf-poster" aria-pressed={abierto === p.id} onClick={() => clic(p)} aria-label={`Ver a ${p.nombre}`}>
            <span className="pf-fondo" aria-hidden="true" style={{ '--bx': `${(p.id * 17) % 80}%` }} />
            {p.pais && <span className="pf-pais">{p.pais}</span>}
            <span className="pf-arco"><Foto p={p} /></span>
            <span className="pf-nom">
              <strong>{p.nombre}</strong>
              <small>{p.hora}</small>
            </span>
          </button>
        ))}
      </div>

      <div className={`pf-detalle${sel ? ' abierto' : ''}`} aria-hidden={!sel}>
        <div className="pf-dentro">
          {sel && (
            <article key={sel.id} className="pf-ficha">
              <button className="pf-x" onClick={() => setAbierto(null)} aria-label="Cerrar detalle">×</button>
              <div className="pf-fa"><Foto p={sel} /></div>
              <div className="pf-ft">
                <span className="pf-badge">{sel.pais ? `Ponente internacional · ${sel.pais}` : 'Ponente confirmado'}</span>
                <h4>{sel.nombre}</h4>
                {sel.cargo && <p className="pf-cargo">{sel.cargo}</p>}
                <p className="pf-emp">{sel.empresa}</p>
                <p className="pf-hora">{jornada.nombre} {jornada.num} de noviembre · {sel.hora}</p>
              </div>
              <div className="pf-fp">
                <small>Tema de ponencia</small>
                <p className={sel.tema ? 'tema' : 'tema tbc'}>{sel.tema || 'Tema por confirmar'}</p>
                {sel.bio && <p className="pf-bio" dangerouslySetInnerHTML={{ __html: sel.bio }} />}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

export default function PonentesFilas() {
  const [abierto, setAbierto] = useState(null)
  return (
    <div className="pf">
      {JORNADAS.map((j) => <Fila key={j.num} jornada={j} abierto={abierto} setAbierto={setAbierto} />)}
      <p className="pf-pista-txt">Desliza cada fila y toca un ponente para ver su ponencia.</p>
    </div>
  )
}
