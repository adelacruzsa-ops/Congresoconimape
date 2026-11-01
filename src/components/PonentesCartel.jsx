import { useCallback, useEffect, useRef, useState } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-cartel.css'

// Galería de carteles: al bajar con el scroll la pantalla se queda fija y los pósters de los
// ponentes pasan de lado (en celular se desliza con el dedo). Datos: PONENTES en src/config/constants.js.

const DIAS = { 4: 'Miércoles', 5: 'Jueves', 6: 'Viernes' }
const OFFSET = 130 // alto de la barra superior fija de la web
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))

export default function PonentesCartel() {
  const wrap = useRef(null)
  const stage = useRef(null)
  const view = useRef(null)
  const track = useRef(null)
  const [modo, setModo] = useState('pin')
  const [act, setAct] = useState(0)
  const actRef = useRef(0)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)')
    const upd = () => setModo(mq.matches ? 'pin' : 'native')
    upd()
    mq.addEventListener('change', upd)
    return () => mq.removeEventListener('change', upd)
  }, [])

  const posters = () => Array.from(track.current.children)

  // Modo fijo (computadora): el scroll vertical mueve los pósters de lado
  useEffect(() => {
    const w = wrap.current, st = stage.current, v = view.current, tr = track.current
    if (!w || !st) return
    let max = 0, raf = 0

    const pintar = (x) => {
      const vw = v.clientWidth
      let best = 0, bestD = Infinity
      posters().forEach((el, i) => {
        const c = el.offsetLeft + el.offsetWidth / 2 + x
        const d = (c - vw / 2) / (vw / 2)
        const a = Math.min(Math.abs(d), 1)
        el.style.transform = `scale(${(1 - a * 0.16).toFixed(3)}) rotate(${(d * 2.2).toFixed(2)}deg)`
        el.style.opacity = (1 - a * 0.5).toFixed(3)
        el.style.zIndex = String(100 - Math.round(a * 50))
        if (Math.abs(c - vw / 2) < bestD) { bestD = Math.abs(c - vw / 2); best = i }
      })
      if (best !== actRef.current) { actRef.current = best; setAct(best) }
    }

    if (modo === 'pin') {
      const layout = () => {
        const pw = tr.children[0].offsetWidth
        tr.style.paddingInline = `${Math.max(24, (v.clientWidth - pw) / 2)}px`
        max = Math.max(0, tr.scrollWidth - v.clientWidth)
        w.style.height = `${st.offsetHeight + max}px`
      }
      const tick = () => {
        raf = 0
        const range = w.offsetHeight - st.offsetHeight
        const p = clamp((OFFSET - w.getBoundingClientRect().top) / Math.max(1, range), 0, 1)
        const x = -p * max
        tr.style.transform = `translate3d(${x}px,0,0)`
        pintar(x)
      }
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
      layout(); tick()
      window.addEventListener('scroll', onScroll, { passive: true })
      const onResize = () => { layout(); tick() }
      window.addEventListener('resize', onResize)
      // las fuentes y fotos pueden cambiar el ancho
      const t = setTimeout(onResize, 600)
      return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); raf && cancelAnimationFrame(raf)
        w.style.height = ''; tr.style.transform = ''; tr.style.paddingInline = ''
        posters().forEach((el) => { el.style.transform = ''; el.style.opacity = ''; el.style.zIndex = '' }) }
    }

    // Modo celular: se desliza de lado con el dedo
    const onSwipe = () => {
      const c = v.scrollLeft + v.clientWidth / 2
      let best = 0, bestD = Infinity
      posters().forEach((el, i) => { const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - c); if (d < bestD) { bestD = d; best = i } })
      if (best !== actRef.current) { actRef.current = best; setAct(best) }
    }
    v.addEventListener('scroll', onSwipe, { passive: true })
    onSwipe()
    return () => v.removeEventListener('scroll', onSwipe)
  }, [modo])

  const irA = useCallback((i) => {
    const v = view.current, w = wrap.current, st = stage.current, el = posters()[i]
    if (!el) return
    if (modo === 'pin') {
      const max = Math.max(1, track.current.scrollWidth - v.clientWidth)
      const p = clamp((el.offsetLeft + el.offsetWidth / 2 - v.clientWidth / 2) / max, 0, 1)
      const top = w.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: top - OFFSET + p * (w.offsetHeight - st.offsetHeight), behavior: 'smooth' })
    } else {
      v.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - v.clientWidth / 2, behavior: 'smooth' })
    }
  }, [modo])

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = stage.current.getBoundingClientRect()
    stage.current.style.setProperty('--gx', `${((e.clientX - r.left) / r.width * 100).toFixed(1)}%`)
    stage.current.style.setProperty('--gy', `${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`)
  }

  const cur = PONENTES[act] || PONENTES[0]

  return (
    <div className={`pc pc-${modo}`} ref={wrap}>
      <div className="pc-stage" ref={stage} onPointerMove={onMove}>
        <div className="pc-fondos" aria-hidden="true">
          {[4, 5, 6].map((d) => <span key={d} className={`pc-fondo d${d}${cur.diaNum === d ? ' on' : ''}`} />)}
          <span className="pc-luz" />
          <span className="pc-grano" />
        </div>

        <div className="pc-top">
          <div className="pc-cuenta" aria-live="polite">
            <span className="pc-n">{String(act + 1).padStart(2, '0')}</span>
            <span className="pc-de">/ {String(PONENTES.length).padStart(2, '0')}</span>
          </div>
          <div className="pc-diaact" key={cur.diaNum}>
            <small>Jornada</small>
            <strong>{DIAS[cur.diaNum]} <em>{cur.diaNum}</em></strong>
            <small>de noviembre · 2026</small>
          </div>
        </div>

        <div className="pc-view" ref={view} tabIndex={modo === 'native' ? 0 : -1} aria-label="Ponentes del congreso">
          <ol className="pc-track" ref={track}>
            {PONENTES.map((p, i) => {
              const [primero, ...resto] = p.nombre.split(' ')
              return (
                <li key={p.id} className={`pc-poster${i === act ? ' act' : ''}`} aria-label={p.nombre}>
                  <div className="pc-marco">
                    <div className="pc-cab">
                      <span className="pc-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="pc-pill">{DIAS[p.diaNum].slice(0, 3)} {p.diaNum}{p.pais ? ` · ${p.pais}` : ''}</span>
                    </div>
                    <div className="pc-arcowrap">
                      <div className="pc-arco">
                        {p.foto ? <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" /> : (<><Contornos id={p.id} /><span aria-hidden="true">{iniciales(p)}</span></>)}
                      </div>
                    </div>
                    <div className="pc-nom">
                      <h4><i>{primero}</i> <b>{resto.join(' ')}</b></h4>
                      {p.cargo && <p className="pc-cargo">{p.cargo}</p>}
                      <p className="pc-emp">{p.empresa}</p>
                    </div>
                    <div className="pc-tema">
                      <small>{p.hora}</small>
                      <p className={p.tema ? '' : 'tbc'}>{p.tema || 'Tema por confirmar'}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="pc-regla" role="group" aria-label="Ir a un ponente">
          {[4, 5, 6].map((d) => (
            <div key={d} className="pc-grupo">
              <div className="pc-ticks">
                {PONENTES.map((p, i) => p.diaNum === d && (
                  <button key={p.id} className={i === act ? 'on' : ''} onClick={() => irA(i)} aria-label={`Ir a ${p.nombre}`} aria-current={i === act} title={p.corto} />
                ))}
              </div>
              <span>{DIAS[d].slice(0, 3)} {d}</span>
            </div>
          ))}
        </div>

        <p className="pc-pista" aria-hidden="true">{modo === 'pin' ? 'Sigue bajando' : 'Desliza →'}</p>
      </div>
    </div>
  )
}
