import AboutSection from '../components/AboutSection'
import BackToTop from '../components/BackToTop'
import CategoryBar from '../components/CategoryBar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import NewArrivalsSection from '../components/NewArrivalsSection'
import ProductsSection from '../components/ProductsSection'
import TopStrip from '../components/TopStrip'
import TrustSection from '../components/TrustSection'

function HomePage() {
  return (
    <main className="site-shell">
      <TopStrip />
      <Navbar />
      <HeroSection />
      <CategoryBar />
      <ProductsSection />
      <AboutSection />
      <NewArrivalsSection />
      <TrustSection />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default HomePage
