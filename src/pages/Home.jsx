// Página inicial do site MinaTech
// Junta todos os componentes da home na ordem certa

import Navbar        from '../components/Navbar'
import Hero          from '../components/Hero'
import TickerBanner  from '../components/TickerBanner'
import StatsBanner   from '../components/StatsBanner'
import AcolheSection from '../components/AcolheSection'
import Footer        from '../components/Footer'

export default function Home() {
  return (
    <>
      {/* navbar fixa no topo */}
      <Navbar />

      {/* seção principal com título e botões */}
      <Hero />

      {/* seção expansível mostrando os grupos que o programa acolhe */}
      <AcolheSection />

      {/* faixa decorativa de palavras em loop */}
      <TickerBanner />

      {/* números do programa com animação de contagem */}
      <StatsBanner />

      <Footer />
    </>
  )
}
