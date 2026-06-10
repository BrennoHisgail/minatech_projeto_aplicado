import Navbar       from '../components/Navbar'
import TeamCard     from '../components/TeamCard'
import OscCard      from '../components/OscCard'
import PartnersGrid from '../components/PartnersGrid'
import Footer       from '../components/Footer'

export default function Oscs() {
  return (
    <>
      <Navbar />

      {/* Equipe */}
      <section className="py-5">
        <div className="container">
          <h1 className="fs-2 fw-bold">Conheça a equipe</h1>
          <div className="divider-pink" />

          <TeamCard
            name="Tatiane Tálcover"
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

      {/* OSCs parceiras */}
      <section className="pb-4" id="oscs">
        <div className="container">
          <OscCard
            logoText="corali"
            description="A Corali é uma OSC dedicada a transformar a realidade de mulheres
              em situação de vulnerabilidade, promovendo sua inclusão no ecossistema
              de tecnologia e inovação."
          />
          <OscCard
            logoText="Engenheiros Sem Fronteiras"
            description="A Engenheiros Sem Fronteiras [Núcleo Florianópolis] é uma OSC que
              utiliza o conhecimento técnico da engenharia para promover transformações
              sociais e ambientais."
          />
        </div>
      </section>

      <PartnersGrid />
      <Footer />
    </>
  )
}
