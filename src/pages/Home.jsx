import Navbar        from '../components/Navbar'
import Hero          from '../components/Hero'
import TickerBanner  from '../components/TickerBanner'
import StatsBanner   from '../components/StatsBanner'
import AcolheSection from '../components/AcolheSection'
import Footer        from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AcolheSection />
      <TickerBanner />
      <StatsBanner />
      <Footer />
    </>
  )
}
