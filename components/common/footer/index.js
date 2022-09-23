
import logo from "../../../img/logo.png"
import Image from "next/image"




export default function Footer() {

    return (

        <footer>
            <div className="flex md:flex-row flex-col items-center text-white p-5 xl:pl-40 xl:pr-40 border-t mt-20 gap-x-5 md:gap-x-28">

                <div>
                    <Image className=" rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"

                        alt="ATB"
                        src={logo}

                        layout="fixed"
                        width={150}
                        height={75}
                        priority
                    />
                
                </div>

                <div>
                    <span> A future in which filmmakers and television producer may bring their ideas to life in a couple of days.</span>
                </div>
            </div>
        </footer>
    )
}