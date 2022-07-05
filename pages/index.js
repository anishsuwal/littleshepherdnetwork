
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
     <div className="w-full font-Montserrat text-sm text-white">
          <Navbar />
          <Hero />          
          <div className=' mt-44   text-justify border-x-yellow-500 border-t border-slate-900 shadow-2xl'>
          <AboutUs/>  
        </div>
        <div className='  text-justify border-x-yellow-500 border-t border-slate-900 shadow-2xl'>
        <Products/>
        </div>
        <div className='  text-justify border-x-yellow-500 border-t border-slate-900 shadow-2xl'>
          <Token/>         
        </div>
        <div className='  text-justify border-x-yellow-500 border-t border-slate-900 shadow-2xl'>
          <WhyWe/>
          <Roadmap/>         
        </div>
        <div className='  text-justify border-x-yellow-500border-t border-slate-900 shadow-2xl'>
          <Team/>
        </div>
        <div className='  text-justify border-x-yellow-500 border-t border-slate-900 shadow-2xl pb-10'>
          <ContactUs/>
        </div>
        <div className=' text-justify border-x-yellow-500 border-t border-slate-900 shadow-2xl '>
          <Footer/>
        </div>
       
      </div>
         
  
      
         

    </>
  )
}
