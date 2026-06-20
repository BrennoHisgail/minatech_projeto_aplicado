import Navbar       from '../components/Navbar'
import Footer       from '../components/Footer'
import DonationForm from '../components/DonationForm'

const IMPACTOS = [
  { icon: 'bi-laptop',  title: 'Workshops e talks',   desc: 'Encontros práticos com profissionais reais da área de tecnologia e engenharia.' },
  { icon: 'bi-book',    title: 'Material didático',   desc: 'Todo o material utilizado nas atividades é fornecido gratuitamente às participantes.' },
  { icon: 'bi-cup-hot', title: 'Lanche e transporte', desc: 'Garantimos que nenhuma menina deixe de participar por falta de acesso ou alimentação.' },
]

export default function Doacao() {
  return (
    <>
      <Navbar />

      {/* Banner topo */}
      <section className="doacao-banner">
        <div className="container text-center">
          <p className="doacao-eyebrow">Faça a diferença</p>
          <h1 className="doacao-banner-title">
            Sua doação abre <span>portas</span><br />
            para meninas na tecnologia.
          </h1>
          <div className="doacao-banner-stats">
            <div className="doacao-banner-stat">
              <span className="doacao-banner-num">150+</span>
              <span className="doacao-banner-label">meninas impactadas</span>
            </div>
            <div className="doacao-banner-divider" />
            <div className="doacao-banner-stat">
              <span className="doacao-banner-num">100%</span>
              <span className="doacao-banner-label">gratuito para elas</span>
            </div>
            <div className="doacao-banner-divider" />
            <div className="doacao-banner-stat">
              <span className="doacao-banner-num">7</span>
              <span className="doacao-banner-label">encontros por edição</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corpo */}
      <section className="doacao-corpo">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Esquerda — impacto */}
            <div className="col-lg-5">
              <h2 className="doacao-corpo-title">O que sua doação financia</h2>
              <div className="doacao-lista">
                {IMPACTOS.map((item, i) => (
                  <div className="doacao-lista-item" key={i}>
                    <div className="doacao-lista-icon">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <div>
                      <p className="doacao-lista-title">{item.title}</p>
                      <p className="doacao-lista-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direita — formulário */}
            <div className="col-lg-7">
              <div className="doacao-form-card">
                <div className="doacao-pix-destaque">
                  <span className="doacao-pix-label">Chave PIX (e-mail)</span>
                  <span className="doacao-pix-value">minatech.floripa@gmail.com</span>
                </div>
                <DonationForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
