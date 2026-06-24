// Seção "O Minatech Acolhe" da página inicial
// Mostra um botão que abre/fecha um painel com os grupos que o programa recebe

import { useState } from 'react'

// cards com os grupos que o minatech acolhe
const CARDS = [
  {
    icon:  'bi-puzzle',
    label: 'Neurodivergentes',
    desc:  'Espaço adaptado para diferentes formas de aprendizagem e participação.',
  },
  {
    icon:  'bi-mortarboard',
    label: 'Estudantes',
    desc:  'Apoio para quem está iniciando sua jornada na tecnologia.',
  },
  {
    icon:  'bi-gender-female',
    label: 'Mulheres',
    desc:  'Incentivo à participação feminina na área de tecnologia.',
  },
  {
    icon:  'bi-rainbow',
    label: 'LGBTQIA+',
    desc:  'Ambiente acolhedor e respeitoso para toda a comunidade.',
  },
]

export default function AcolheSection() {
  // controla se o painel com os cards está aberto ou fechado
  const [open, setOpen] = useState(false)

  return (
    <section className="acolhe-section">
      <div className="container text-center">

        {/* botão que abre e fecha o painel — o chevron gira quando está aberto */}
        <button
          className="acolhe-trigger"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          O Minatech <span className="acolhe-trigger-highlight">acolhe!</span>
          <i className={`bi bi-chevron-down ms-2 acolhe-chevron${open ? ' open' : ''}`} />
        </button>

        {/* painel que aparece quando clica no botão */}
        <div className={`acolhe-expand${open ? ' open' : ''}`}>
          <p className="acolhe-modal-subtitle">
            Um espaço <span className="acolhe-highlight">seguro</span> para aprender,
            compartilhar conhecimento e crescer na área de tecnologia.
          </p>

          {/* grid com os cards de cada grupo acolhido */}
          <div className="row justify-content-center g-3 mt-3">
            {CARDS.map((card, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="acolhe-card">
                  <div className="acolhe-icon">
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <p className="acolhe-card-label">{card.label}</p>
                  <p className="acolhe-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
