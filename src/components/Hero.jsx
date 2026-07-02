// Seção hero da página inicial
// Mostra o título principal, descrição do programa e os botões de ação

import { Link } from 'react-router-dom'
import grupoMinatech from '../assets/grupo-minatech.jpg'

const STATS = [
  { num: '150+', label: 'meninas impactadas' },
  { num: '100%', label: 'gratuito'           },
  { num: '7',    label: 'encontros por edição'},
]

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* lado esquerdo — texto com título, descrição e botões */}
          <div className="col-lg-6">
            <p className="hero-label">Jornada Minatech · Florianópolis</p>
            <h1 className="hero-title">
              Tecnologia feita por{' '}
              <em>meninas,<br />para meninas</em>
            </h1>
            <p className="hero-desc">
              Um programa gratuito que inspira jovens meninas de escolas
              públicas a explorar engenharia e tecnologia, porque o futuro
              também é delas!
            </p>

            {/* botões de call to action */}
            <div className="d-flex flex-wrap gap-3">
              <Link to="/inscricao" className="btn btn-pink">Participar</Link>
              <Link to="/doacao"    className="btn btn-outline-pink">Apoie o projeto</Link>
            </div>
          </div>

          {/* lado direito — moldura vinho com foto e números */}
          <div className="col-lg-6">
            <div className="hero-frame">

              {/* foto do grupo dentro da moldura */}
              <div className="hero-frame-img">
                <img src={grupoMinatech} alt="Grupo MinaTech" />
              </div>

              {/* números de impacto na extensão inferior da moldura */}
              <div className="hero-frame-stats">
                {STATS.map((s, i) => (
                  <div className="hero-frame-stat" key={i}>
                    <span className="hero-frame-num">{s.num}</span>
                    <span className="hero-frame-label">{s.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
