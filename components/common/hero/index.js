import Image from "next/image"
import { useEffect } from "react";
import logo from "../../../img/entertainment.png"



export default function Hero() {




  useEffect (() => {

    if(typeof window !='undefined')
            var obj = document.getElementById('video');
            var obj1 = document.getElementById('video1');

            obj.playbackRate=0.5;
            obj1.playbackRate=0.5;

            console.log("ddddddddddddddddddddddddd",obj.playbackRate);        

    },[]);
    

    return (
        <section id="home" className="delay-1000 scroll-m-64  ">
            <header className="relative grid  min-h-screen  overflow-hidden ">
            <div
                className="relative z-30  text-white   rounded-xl p-5  xl:pl-40 xl:pr-40"
            >   
               
                <div className=" grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <header className=" group pt-48">
                            <h1 className=" text-3xl text-yellow-400 lg:text-5xl">
                                <br className="block md:hidden" />
                                <span className="text-5xl font-bold"> </span>
                                <span className="inline-flex h-14 xl:h-20  overflow-x-hidden animate-type
                                 group-hover:animate-type-reverse   whitespace-nowrap text-brand-accent will-change-transform
                                 text-2xl sm:text-3xl xl:text-5xl font-bold ">
                                    Little Shepherd Network
                                </span>
                            </h1>
                            <div className="text-[10px] lg:text-sm font-bold uppercase ">Community Driven WEB-3 STREAMING PLATFORM</div>
                        </header>

                        <div className=" flex lg:justify-start  gap-x-5 md:gap-x-20 pt-10">
                            <div className="rounded-md shadow ">
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
            <video id="video"
                autoPlay
                loop
                muted playsInline   
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-30"
                            >
                <source
                src="https://cdn.videvo.net/videvo_files/video/free/2013-08/large_watermarked/hd0920_preview.mp4"
                type="video/mp4"
                />
            </video>
            <video
                 id="video1"
                autoPlay
                loop
                muted
                playsInline
               
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-30"
            >
                <source
src="https://cdn.videvo.net/videvo_files/video/free/2012-07/large_watermarked/hd1931_preview.mp4"               
 type="video/mp4"
                />
            </video>
            </header>
        </section>
        
    )
    
}




