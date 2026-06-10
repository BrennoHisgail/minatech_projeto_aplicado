const CARDS = [
  { icon: 'bi-brain',         label: 'Neurodivergentes' },
  { icon: 'bi-mortarboard',   label: 'Estudantes'       },
  { icon: 'bi-gender-female', label: 'Mulheres'         },
  { icon: 'bi-rainbow',       label: 'LGBTQIA+'         },
]

export default function AcolheSection() {
  return (
    <section className="acolhe-section">
      <div className="container">

        <h2 className="section-title">O Minatech acolhe</h2>

        <div className="row justify-content-center g-3">
          {CARDS.map((card, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="acolhe-card">
                <div className="acolhe-icon">
                  <i className={`bi ${card.icon}`} />
                </div>
                <p>{card.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
