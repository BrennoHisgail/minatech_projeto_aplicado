import Navbar       from '../components/Navbar'
import OscCard      from '../components/OscCard'
import PartnersGrid from '../components/PartnersGrid'
import Footer       from '../components/Footer'

export default function Parceiras() {
  return (
    <>
      <Navbar />

      <section className="osc-section">
        <div className="container">
          <h1 className="osc-section-title">Organizações parceiras</h1>
          <p className="osc-section-sub">
            O MinaTech é realizado em parceria com organizações que compartilham
            o compromisso com inclusão, diversidade e transformação social.
          </p>
          <div className="divider-pink mb-5" />

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
      </section>

      <PartnersGrid />
      <Footer />
    </>
  )
}
