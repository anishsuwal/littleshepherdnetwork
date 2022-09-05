import Image from "next/image"
import contactusimg from "../../../img/contactus-img.png"
import twitter from "../../../img/twitter.png"
import telegram from "../../../img/telegram.png"
import email from "../../../img/email.png"






export default function ContactUs() {

    return (
        <section id="contactus" className="pt-[150px]">

            <div><h1 className="text-2xl md:text-5xl  font-semibold pb-20 ">Contact Us</h1>
                <div className="flex flex-wrap-reverse flex-col md:flex-row  gap-x-20  justify-between">

                    <div className="flex-1 flex-col md:flex-row items-center  justify-between ">
                        <div className="flex flex-col md:flex-row    justify-between gap-x-20">
                        <div className="bg-white-300 rounded-lg w-full mt-5">
                            <input
                                type="text"
                                className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-yellow-400 focus:outline-none
                            "
                                id="exampleText0"
                                placeholder="Name"
                            />
                        </div>
                        <div className="bg-white-500 row-span-1 rounded-lg w-full mt-5"><input
                            type="text"
                            className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-yellow-400 focus:outline-none
                            "
                            id="exampleText0"
                            placeholder="Email"
                        /></div>
                        </div>
                        <div className="flex flex-col md:flex-row    justify-between  gap-x-20">
                        <div className="bg-white-300 rounded-lg w-full mt-5">
                            <input
                                type="text"
                                className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-yellow-400 focus:outline-none
                            "
                                id="exampleText0"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="bg-white-300 rounded-lg w-full mt-5"><input
                            type="text"
                            className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-yellow-400 focus:outline-none
                            "
                            id="exampleText0"
                            placeholder="Subject"
                        /></div>
                        </div>
                        <div className="flex flex-col md:flex-row    justify-between ">
                        <div className="bg-white-300  rounded-lg w-full mt-5">
                            <textarea
                                id="message" rows="4"
                                className="block p-2.5 
                                w-full
                                h-56
                                text-sm
                                text-gray-700
                                bg-white bg-clip-padding 
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-yellow-400 focus:outline-none"
                                placeholder="Message">

                            </textarea>
                        </div> 
                                              
                        </div>
                        <div className=" rounded-lg mt-5 text-center ">
                        <button className="text-base font-medium rounded-full border-yellow-400 border shadow-2xl
                          px-7  lg:w-96 h-10 w-full    mt-5 lg:mt-0
                        text-center justify-center items-centercursor-pointer hover:bg-yellow-500 bg-transparent">
                        Send 
                        </button>
                </div>
                    </div>
                    <div className=" flex flex-col items-center mt-5">
                        <div >
                        <Image className="w-16 md:w-32 lg:w-48"
                                alt="ATB"
                                src={contactusimg}
                                width={200}
                                height={200}
                                layout='fixed'
                            />
                            </div>
                            <div>
                            <div className="flex  text-left items-center justify-start ">
                            <Image 
                                alt="ATB"
                                src={email}
                                width={40}
                                height={40}
                                layout='fixed'
                            />
                            <a>littleshepherd.network@gmail.com</a>
                            </div>
                                
                            <div className="flex  text-left items-center justify-start mt-3">
                            <Image 
                                alt="ATB"
                                src={twitter}
                                width={40}
                                height={40}
                                layout='fixed'
                            />
                            <a href="https://twitter.com/LSNetwork_web3"  target="_blank"  className="hover:text-yellow-400" >https://twitter.com/LSNetwork_web3</a>
                            </div>
                            <div className="flex text-left items-center justify-start mt-3">
                            <Image 
                                alt="ATB"
                                src={telegram}
                                width={40}
                                height={40}
                                layout='fixed'
                            />
                            <div>
                                <a href="https://t.me/LSNetwork_web3"  target="_blank" className="hover:text-yellow-400">https://t.me/LSNetwork_web3</a></div>
                            </div>
                            </div>

                    </div>                            
                </div>
                

                
            </div>
        </section>

    )
}


