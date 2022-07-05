import Image from "next/image"
import logo from "../../../img/entertainment.png"



export default function Hero() {

    return (
        <section id="home" className="delay-1000 text-white">
            <div className="pt-44 pb-16  text-white">

                <div className="p-2 sm:ml-20  md:ml-20  lg:ml-40  grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <header className=" group  py-10">
                            <h1 className="mb-1  text-4xl text-yellow-400 md:text-6xl">
                                <br className="block md:hidden" />
                                <span className="text-5xl font-bold"> </span>
                                <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse 
                    whitespace-nowrap text-brand-accent will-change-transform text-5xl font-bold ">
                                    Little Shepherd Network
                                </span>
                                
                                <span
                                    className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
                                ></span>
                            </h1>
                            <div className="text-sm font-bold uppercase ">Community Driven WEB-3 STREAMING PLATFORM</div>
                        </header>

                        <div className=" flex lg:justify-start ">
                            <div className="rounded-md shadow mx-2 lg:mx-20">
                                <a href="#" className="w-full flex items-center shadow-2xl justify-center px-5 py-2 border-yellow-400 border 
                        text-base font-medium rounded-full 
                         hover:bg-yellow-500   ">
                                    Buy Tokens
                                </a>
                            </div>
                            <div className="rounded-md shadow">
                                <a href="#" className="w-full flex items-center justify-center px-5 py-2 border-yellow-400 border shadow-2xl 
                        text-base font-medium rounded-full 
                        hover:bg-yellow-500   ">
                                    Whitepaper
                                </a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}


