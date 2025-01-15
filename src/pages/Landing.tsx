import Header from '@/components/landing/Header.jsx'
import Hero from '@/components/landing/Hero.jsx'
import About from '@/components/landing/About.jsx'
import Gallery from '@/components/landing/Gallery.jsx'
import HowToHelp from '@/components/landing/HowToHelp.jsx'
import ImpactCounter from '@/components/landing/ImpactCounter.jsx'
import Events from '@/components/landing/Events.jsx'
import Footer from '@/components/landing/Footer.jsx'

function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <HowToHelp />
      <Gallery />
      <ImpactCounter />
      <Events />
      <Footer />
    </div>
  );
}

export default Landing;
