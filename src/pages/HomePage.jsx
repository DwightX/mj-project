import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyChooseMe from '../components/WhyChooseMe'
import SocialProof from '../components/SocialProof'
// import About from '../components/About'
import Course from '../components/Course'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseMe />
        <Testimonials />
        {/* <About /> */}
        {/* <Course /> */}
        <Pricing />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
