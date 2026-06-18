import Navbar   from '../components/Navbar'
import TeamCard  from '../components/TeamCard'
import Footer    from '../components/Footer'

export default function QuemSomos() {
  return (
    <>
      <Navbar />

      <section className="quem-somos-page">
        <div className="container">

          <div className="quem-somos-header">
            <h1>Quem somos</h1>
            <p className="quem-somos-lead">
              Somos a Jornada Minatech. A Corali e os Engenheiros sem Fronteiras
              (Florianópolis) se uniram para organizar um espaço seguro de aprendizado
              e empoderamento para meninas na área de tecnologia.
            </p>
            <div className="divider-pink" />
          </div>

          <div className="quem-somos-missao row g-4 mb-5">
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

          <h2 className="fw-bold mb-2">Conheça a equipe</h2>
          <div className="divider-pink mb-4" />

          <TeamCard
            name="Tatiane Takimoto"
            role="Fundadora e coordenadora geral"
            imgSeed="tatiane"
            description="Somos uma equipe formada por 11 mulheres dedicadas a abrir
              caminhos para outras mulheres nos setores de tecnologia e engenharia.
              Nosso foco é acolher aquelas em situação de vulnerabilidade, oferecendo
              suporte, capacitação e as oportunidades necessárias para que ocupem
              seus espaços de direito e cresçam com excelência no mercado de trabalho."
          />

        </div>
      </section>

      <Footer />
    </>
  )
}
