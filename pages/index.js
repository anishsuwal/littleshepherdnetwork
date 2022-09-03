
import Hero from '../components/common/hero'
import AboutUs from '../components/common/aboutus'
import ContactUs from '../components/common/contactus'
import BaseLayout from '../components/layout/base'


export default function Home() {
  return (
    <BaseLayout>
      <Hero />

      <div className="w-full font-Montserrat text-sm text-white  p-5 text-justify xl:pl-40 xl:pr-40  ">
        <AboutUs />
           
        <ContactUs />
      </div>
      </BaseLayout>
  )
}
