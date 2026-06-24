// Página de doação do MinaTech
// Mostra o impacto do programa, a chave PIX e o formulário pra registrar a doação

import Navbar       from '../components/Navbar'
import Footer       from '../components/Footer'
import DonationForm from '../components/DonationForm'

// lista do que é financiado pelas doações
const IMPACTOS = [
  { icon: 'bi-laptop',  title: 'Workshops e talks',   desc: 'Encontros práticos com profissionais reais da área de tecnologia e engenharia.' },
  { icon: 'bi-book',    title: 'Material didático',   desc: 'Todo o material utilizado nas atividades é fornecido gratuitamente às participantes.' },
  { icon: 'bi-cup-hot', title: 'Lanche e transporte', desc: 'Garantimos que nenhuma menina deixe de participar por falta de acesso ou alimentação.' },
]

export default function Doacao() {
  return (
    <>
      <Navbar />

      {/* banner do topo com título e estatísticas do programa */}
      <section className="doacao-banner">
        <div className="container text-center">
          <p className="doacao-eyebrow">Faça a diferença</p>
          <h1 className="doacao-banner-title">
            Sua doação abre <span>portas</span><br />
            para meninas na tecnologia.
          </h1>

          {/* números em destaque pra mostrar o impacto */}
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

      {/* corpo da página dividido em duas colunas */}
      <section className="doacao-corpo">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* coluna esquerda — lista o que a doação financia */}
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

            {/* coluna direita — card com chave PIX e formulário de doação */}
            <div className="col-lg-7">
              <div className="doacao-form-card">
                {/* destaque visual da chave PIX antes do formulário */}
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
