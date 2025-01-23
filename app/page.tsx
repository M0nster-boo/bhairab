import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Media from '@/components/Media'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Media />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}

