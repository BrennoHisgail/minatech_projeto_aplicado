// Banner de estatísticas do programa
// O número de meninas impactadas faz uma animação de contagem quando a seção aparece na tela

import { useState, useEffect, useRef } from 'react'

export default function StatsBanner() {
  // guarda o número atual da contagem animada
  const [count, setCount] = useState(0)

  // referência pro elemento da seção pra monitorar quando ele entra na tela
  const sectionRef = useRef(null)

  // flag pra garantir que a animação só roda uma vez
  const animated = useRef(false)

  // useEffect que cria um IntersectionObserver pra detectar quando a seção fica visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // quando a seção aparece na tela e a animação ainda não rodou, inicia a contagem
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const TARGET   = 150   // número final da contagem
          const DURATION = 1800  // duração em milissegundos
          const STEPS    = (60 * DURATION) / 1000
          const INC      = TARGET / STEPS
          let cur        = 0

          // função que incrementa o contador frame a frame
          const tick = () => {
            cur += INC
            if (cur >= TARGET) { setCount(TARGET) }
            else { setCount(Math.floor(cur)); requestAnimationFrame(tick) }
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 } // dispara quando 40% da seção está visível
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-banner" ref={sectionRef}>
      <div className="container">
        <div className="stats-row">

          {/* número com animação de contagem */}
          <div className="stats-item">
            <span className="stats-number">{count}+</span>
            <span className="stats-label">meninas impactadas</span>
          </div>

          <div className="stats-divider" />

          {/* estatística fixa — sem animação */}
          <div className="stats-item">
            <span className="stats-number">100%</span>
            <span className="stats-label">gratuito para participantes</span>
          </div>

          <div className="stats-divider" />

          <div className="stats-item">
            <span className="stats-number">7</span>
            <span className="stats-label">encontros por edição</span>
          </div>

        </div>
      </div>
    </section>
  )
}
