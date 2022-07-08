
import Hero from '../components/common/hero'
import Navbar from '../components/common/navbar'
import AboutUs from '../components/common/aboutus'
import Particle from '../components/config/Particles'
import Token from '../components/common/token'
import Roadmap from '../components/common/roadmap'
import WhyWe from '../components/common/whywe'
import Products from '../components/common/products'
import ContactUs from '../components/common/contactus'
import Team from '../components/common/team'
import Footer from '../components/common/footer'

export default function Home() {
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />

      <div className="w-full font-Montserrat text-sm text-white scroll-smooth p-5 text-justify xl:pl-40 xl:pr-40  ">
        <AboutUs />
        <Products />
        <Token />
        <WhyWe />
        <Roadmap />
        <Team />
        <ContactUs />
      </div>
      <Footer />      






    </>
  )
}
