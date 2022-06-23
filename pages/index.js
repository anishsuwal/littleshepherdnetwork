
import Hero from '../components/common/hero'
import Navbar from '../components/common/navbar'
import AboutUs from '../components/common/aboutus'
import Particle from '../components/config/Particles'
import Token from '../components/common/token'
import Roadmap from '../components/common/roadmap'
import WhyWe from '../components/common/whywe'
import Products from '../components/common/products'

export default function Home() {
  return (
    <>
     <Particle />
     <div className="w-full font-Montserrat text-sm">
          <Navbar />
          <Hero />          
          <div className='  text-justify border-x-yellow-500 ring-1'>
            <Products/>
        </div>
        <div className='  text-justify border-x-yellow-500 ring-1'>
        <AboutUs/>         
        </div>
        <div className='  text-justify border-x-yellow-500 ring-1'>
          <Token/>         
        </div>
        <div className='  text-justify border-x-yellow-500 ring-1'>
          <WhyWe/>
          <Roadmap/>         
        </div>
       
      </div>
         
  
      
         

    </>
  )
}
