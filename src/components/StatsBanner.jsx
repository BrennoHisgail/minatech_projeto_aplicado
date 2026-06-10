import { useState, useEffect, useRef } from 'react'

export default function StatsBanner() {
  const [count, setCount]   = useState(0)
  const sectionRef          = useRef(null)
  const animated            = useRef(false)

  /* Anima o contador quando a seção entra no viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const TARGET   = 150
          const DURATION = 1800 // ms
          const STEPS    = (60 * DURATION) / 1000
          const INC      = TARGET / STEPS
          let cur        = 0

          const tick = () => {
            cur += INC
            if (cur >= TARGET) {
              setCount(TARGET)
            } else {
              setCount(Math.floor(cur))
              requestAnimationFrame(tick)
            }
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
        <div className="row align-items-center g-4">
          <div className="col-md-7 text-white">
            <p className="stats-prefix">mais de</p>
            <span className="stats-number">{count}+</span>
            <p className="stats-suffix mt-2">
              meninas impactadas na Grande Florianópolis!
            </p>
          </div>
        </div>
      </div>

      <p className="stats-gratuito-text">
        100%<br />GRATUITO
      </p>
    </section>
  )
}
