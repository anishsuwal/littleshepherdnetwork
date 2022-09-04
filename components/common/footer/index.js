
import logo from "../../../img/logo-footer.png"
import Image from "next/image"
import scrollup from "../../../img/scrollup.png"




export default function Footer() {

    return (

        <footer>
            <div className=" text-white p-5 xl:pl-40 xl:pr-40 border-t mt-20">
                    <Image className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"

                        alt="ATB"
                        src={logo}

                        layout="fixed"
                width={150}
                height={100}
                         priority
                    />
                <div className=" p-6 
                        grid sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5  gap-20">
                    <div className="max-w-2xl">
                        <span className="text-lg md:text-3xl font-bold sm:mt-4 sm:text-xl">LSNetwork </span>
                        <p className="pt-5">The trusted brand in cryptocurrency Cryptocurrency, perfect investment</p>
                        <div >
                            <ul>
                                <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-2xl">
                        <span className="text-lg md:text-3xl font-bold sm:mt-4 sm:text-xl">Labs </span>
                        <ul className="pt-5">
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Careers</a>
                            </li>
                            <li>
                                <a href="">Whitepapaer</a>
                            </li>
                        </ul></div>
                    <div className="max-w-2xl">
                        <span className=" font-bold sm:mt-4 text-lg md:text-3xl ">Develop </span>
                        <ul className="pt-5">
                            <li>
                                <a href="">Docs</a>
                            </li>
                            <li>
                                <a href="">Github</a>
                            </li>
                            <li>
                                <a href="">Academy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-2xl">
                        <span className=" font-bold sm:mt-4 text-lg md:text-3xl ">Participate </span>
                        <ul className="pt-5">
                            <li>
                                <a href="">Community</a>
                            </li>
                            <li>
                                <a href="">Events</a>
                            </li>
                            <li>
                                <a href="">Swag</a>
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-2xl">
                        <span className=" font-bold sm:mt-4 text-lg md:text-3xl ">Other </span>
                        <ul className="pt-5">
                            <li>
                                <a href="">Terms of Use</a>
                            </li>
                            <li>
                                <a href="">Cookie Policy</a>
                            </li>
                        </ul></div>
                </div>         
                </div>
              

        </footer>
    )
}