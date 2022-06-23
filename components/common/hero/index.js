import Image from "next/image"
import logo from "../../../img/entertainment.png"



export default function Hero() {

    return (
            <section id="home" className="delay-1000">
            <div className="pt-44 pb-16  text-white">

                <div className="ml-6 sm:ml-20  md:ml-20  lg:ml-40  grid grid-cols-1 md:grid-cols-2 gap-28">
                    <div><h1 className="text-xl">Start Investing & Earn Money</h1>

                <h2 className="subtitle mb-2 text-5xl py-10">Say Goodbye To <br/>Idle #Money.</h2>
                <div className="text-xl">
                Invest your spare change in <strong>ATB Token </strong> and save with
                crypto to earn interest in real time.</div>
                <div className="w-full  rounded-full dark:bg-gray-700 ">
                <span className="text-right">Total raised: 1 864 866$</span>
                    <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-sm  text-black text-center p-1 font-bold 
                    leading-none rounded-full mr-5" > 45%</div>
                     <span className="text-left">Fixed token edition 5.000.000 BITS</span>
                </div>

               

               

                <div className="mt-5 sm:mt-8 flex lg:justify-start">
                    <div className="rounded-md shadow">

                    <a href="#" className="w-full flex items-center shadow-2xl justify-center px-5 py-2 border-yellow-400 border 
                                        text-base font-medium rounded-full 
                    hover:bg-yellow-500   ">
                            Buy Tokens
                        </a>
                  
                    </div>
                    <div className="rounded-md shadow ml-20">

                    <a href="#" className="w-full flex items-center justify-center px-5 py-2 border-yellow-400 border shadow-2xl 
                    text-base font-medium rounded-full 
                    hover:bg-yellow-500   ">
                        Whitepappers
                    </a>

</div>

                </div></div>
                    <div className="position: block">
                         <Image className="w-full aspect-video ..."
                        alt="ATB"
                        src={logo}
                        layout='responsive'                      
                        priority
                        
                    /></div>
                </div>

            </div>
            </section>

    )
}


