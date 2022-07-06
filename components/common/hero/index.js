import Image from "next/image"
import logo from "../../../img/entertainment.png"



export default function Hero() {

    return (
        <section id="home" className="delay-1000 scroll-m-64 ">
            <div className="items-center mb-24">
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <header className=" group  py-10">
                            <h1 className="mb-1  text-3xl text-yellow-400 lg:text-5xl">
                                <br className="block md:hidden" />
                                <span className="text-5xl font-bold"> </span>
                                <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse 
                    whitespace-nowrap text-brand-accent will-change-transform text-2xl sm:text-3xl lg:text-5xl font-bold ">
                                    Little Shepherd Network
                                </span>
                            </h1>
                            <div className="text-[10px] lg:text-sm font-bold uppercase ">Community Driven WEB-3 STREAMING PLATFORM</div>
                        </header>

                        <div className=" flex lg:justify-start md:gap-x-20 ">
                            <div className="rounded-md shadow mx-2 ">
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


