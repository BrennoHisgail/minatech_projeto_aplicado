import Navbar       from '../components/Navbar'
import OscCard      from '../components/OscCard'
import PartnersGrid from '../components/PartnersGrid'
import Footer       from '../components/Footer'

export default function QuemSomos() {
  return (
    <>
      <Navbar />

      <section className="quem-somos-page">
        <div className="container">

          {/* Conheça a equipe */}
          <div className="qs-team-section">
            <div className="row g-5 align-items-center">

              <div className="col-md-5">
                <div className="qs-team-photo-card">
                  <img
                    src="https://picsum.photos/seed/tatiane/480/560"
                    alt="Tatiana Takimoto"
                  />
                  <div className="qs-team-overlay">
                    <span className="qs-team-name">Tatiana Takimoto</span>
                    <span className="qs-team-role">Fundadora e coordenadora geral</span>
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <h2 className="qs-team-title">Conheça a<br />equipe</h2>
                <p className="qs-team-desc">
                  Somos uma equipe formada por 11 mulheres dedicadas a abrir
                  caminhos para outras mulheres nos setores de tecnologia e engenharia.
                  Nosso foco é acolher aquelas em situação de vulnerabilidade, oferecendo
                  suporte, capacitação e as oportunidades necessárias para que ocupem
                  seus espaços de direito e cresçam com excelência no mercado de trabalho.
                </p>
              </div>

            </div>
          </div>

          {/* OSCs */}
          <div className="qs-osc-section">
            <OscCard
              name="Corali"
              description="A Corali é uma OSC dedicada a transformar a realidade de mulheres
                em situação de vulnerabilidade, promovendo sua inclusão no ecossistema
                de tecnologia e inovação."
            />
            <OscCard
              name="Engenheiros Sem Fronteiras"
              description="A Engenheiros Sem Fronteiras (Núcleo Florianópolis) é uma OSC que
                utiliza o conhecimento técnico da engenharia para promover transformações
                sociais e ambientais."
              reverse
            />
          </div>

          {/* Missão / Visão / Valores */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="missao-card">
                <i className="bi bi-lightbulb missao-icon" />
                <h5>Missão</h5>
                <p>Inspirar meninas a conhecerem e seguirem carreiras tecnológicas,
                  mostrando que essas profissões não são só para meninos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="missao-card">
                <i className="bi bi-eye missao-icon" />
                <h5>Visão</h5>
                <p>Um futuro onde a tecnologia é construída por todas — com diversidade,
                  inclusão e representatividade em todos os níveis.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="missao-card">
                <i className="bi bi-heart missao-icon" />
                <h5>Valores</h5>
                <p>Acolhimento, diversidade, empoderamento feminino, educação de
                  qualidade e transformação social.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <PartnersGrid />

      <Footer />
    </>
  )
}
