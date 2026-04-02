import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyChooseMe from '../components/WhyChooseMe'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// GQ / Bloomberg editorial double-rule transition
// Masculine: 3px bold + 1px thin, no ornaments
function SectionTransition({ from = 'light' }) {
  const bg = from === 'light' ? '#F0E9DF' : '#0C1420'
  const thick = from === 'light' ? 'rgba(28,21,16,0.22)' : 'rgba(200,149,108,0.4)'
  const thin = from === 'light' ? 'rgba(28,21,16,0.08)' : 'rgba(200,149,108,0.12)'

  return (
    <div style={{ background: bg, padding: '0 2rem' }}>
      <div style={{ height: '3px', background: thick }} />
      <div style={{ height: '1px', background: thin, marginTop: '4px' }} />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseMe />
        <SectionTransition from="light" />
        <Testimonials />
        <Pricing />
        <Booking />
        <SectionTransition from="dark" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
