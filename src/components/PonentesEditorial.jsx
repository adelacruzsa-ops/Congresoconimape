import { useEffect, useRef, useState } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-editorial.css'

// Cartelera editorial de ponentes: fondo crema, índice lateral por jornada y fichas con retrato.
// Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles', corto: 'Mié' },
  { num: 5, nombre: 'Jueves', corto: 'Jue' },
  { num: 6, nombre: 'Viernes', corto: 'Vie' },
]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function PonentesEditorial() {
  const raiz = useRef(null)
  const [activo, setActivo] = useState(4)

  useEffect(() => {
    const el = raiz.current
    if (!el) return
    const fichas = el.querySelectorAll('.pe2-ficha')
    if (!('IntersectionObserver' in window)) { fichas.forEach((f) => f.classList.add('in')); return }
    const ioF = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ioF.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    fichas.forEach((f) => ioF.observe(f))
    const ioD = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActivo(Number(e.target.dataset.dia)) }),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    el.querySelectorAll('.pe2-dia').forEach((d) => ioD.observe(d))
    return () => { ioF.disconnect(); ioD.disconnect() }
  }, [])

  const irA = (num) => {
    const d = raiz.current.querySelector(`#pe2-dia-${num}`)
    if (d) window.scrollTo({ top: d.getBoundingClientRect().top + window.scrollY - 200, behavior: 'smooth' })
  }

  return (
    <div className="pe2" ref={raiz}>
      <nav className="pe2-riel" aria-label="Jornadas">
        {JORNADAS.map((j) => (
          <button key={j.num} onClick={() => irA(j.num)} aria-current={activo === j.num}>
            <b>{String(j.num).padStart(2, '0')}</b>
            <span>{j.corto}</span>
          </button>
        ))}
        <i aria-hidden="true">Nov<br />2026</i>
      </nav>

      <div className="pe2-cuerpo">
        {JORNADAS.map((j) => {
          const lista = PONENTES.filter((p) => p.diaNum === j.num)
          return (
            <section key={j.num} className="pe2-dia" id={`pe2-dia-${j.num}`} data-dia={j.num} aria-label={`Ponentes del ${j.nombre} ${j.num} de noviembre`}>
              <header>
                <h3>{j.nombre} {j.num} <em>de noviembre</em></h3>
                <span>{lista.length} ponentes</span>
              </header>
              <ul>
                {lista.map((p, k) => (
                  <li key={p.id} className="pe2-ficha" style={{ '--k': k % 3 }}>
                    <div className="pe2-foto">
                      {p.foto ? (
                        <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" />
                      ) : (
                        <div className="pe2-ph">
                          <Contornos id={p.id} />
                          <span aria-hidden="true">{iniciales(p)}</span>
                        </div>
                      )}
                      <span className="pe2-hora">{p.hora}</span>
                      {p.pais && <span className="pe2-pais">{p.pais}</span>}
                    </div>
                    <h4>{p.nombre}</h4>
                    {p.cargo && <p className="pe2-cargo">{p.cargo}</p>}
                    <p className="pe2-emp">{p.empresa}</p>
                    <p className={`pe2-tema${p.tema ? '' : ' tbc'}`}>{p.tema || 'Tema por confirmar'}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
