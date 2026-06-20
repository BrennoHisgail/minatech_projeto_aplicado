import { useState, useEffect, useRef } from 'react'

export default function StatsBanner() {
  const [count, setCount] = useState(0)
  const sectionRef        = useRef(null)
  const animated          = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const TARGET   = 150
          const DURATION = 1800
          const STEPS    = (60 * DURATION) / 1000
          const INC      = TARGET / STEPS
          let cur        = 0
          const tick = () => {
            cur += INC
            if (cur >= TARGET) { setCount(TARGET) }
            else { setCount(Math.floor(cur)); requestAnimationFrame(tick) }
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-banner" ref={sectionRef}>
      <div className="container">
        <div className="stats-row">

          <div className="stats-item">
            <span className="stats-number">{count}+</span>
            <span className="stats-label">meninas impactadas</span>
          </div>

          <div className="stats-divider" />

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
