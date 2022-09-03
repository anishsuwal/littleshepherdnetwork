import Footer from "../../common/footer";
import Navbar from "../../common/navbar";
import Particle from "../../config/Particles";


export default function BaseLayout({children}) {

    return (

           < >
                <Particle />
                <Navbar/>
                <div className="  text-white ">
                    {children}
                </div>
                <Footer/>
            </>            
     
    )
}