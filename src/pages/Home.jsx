import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import TickerBanner from '../components/TickerBanner'
import StatsBanner  from '../components/StatsBanner'
import AcolheSection from '../components/AcolheSection'
import AboutSection from '../components/AboutSection'
import Footer       from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TickerBanner />
      <StatsBanner />
      <AcolheSection />
      <AboutSection />
      <Footer />
    </>
  )
}
