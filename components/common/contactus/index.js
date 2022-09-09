

import Image from "next/image"
import contactusimg from "../../../img/contactus-img.png"
import twitter from "../../../img/twitter.png"
import telegram from "../../../img/telegram.png"
import { useRef, useState } from 'react';
import { sendEmailx } from '../../email/sendmail';


export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phnumber, setPhnumber] = useState('')
    const [message, setMessage] = useState('')
    const [fieldError, setFieldError] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.length == 0) {
            setFieldError(true)
            return
        }
        else if (email.search()) {
            setFieldError(true)
            return
        }
        else if (phnumber.length == 0) {
            setFieldError(true)
            return
        }
        else if (message.length == 0) {
            setFieldError(true)
            return
        }
        else {
            setFieldError(false)

        }
        sendEmailx(form, "template_q7wu1sr")
        e.target.reset()
        setName('')
        setEmail('')
        setPhnumber('')
        setMessage('')
        setFieldError(false)
    };


    return (
        <section id="contactus" className="pt-[150px]">
            <div className="justify-center md:border items-center md:p-5  text-bold  mt-10 ">


                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 justify-between 
            text-xs lg:text-sm    mt-5   shadow-2xl rounded-lg text-center">
                        
                        <div className="text-center items-center justify-center mt-10">
                            <Image className="w-16 md:w-32 lg:w-48"
                                alt="ATB"
                                src={contactusimg}
                                width={250}
                                height={250}
                                layout='fixed'
                            />
                        <div className="flex  text-left items-center justify-center  mt-3 gap-x-10">
                                <a href="https://twitter.com/LSNetwork_web3" target="_blank" rel="noreferrer" className="hover:text-yellow-400" >

                                    <Image
                                        alt="ATB"
                                        src={twitter}
                                        width={40}
                                        height={40}
                                        layout='fixed'
                                    />
                                </a>
                                <a href="https://t.me/LSNetwork_web3" target="_blank" rel="noreferrer" className="hover:text-yellow-400">

                                    <Image
                                        alt="ATB"
                                        src={telegram}
                                        width={40}
                                        height={40}
                                        layout='fixed'
                                    />
                                </a>
                            </div>
                        </div>
                        
                    <div className="flex-1  mt-10 w-full md:pr-20">
                        <p className="font-semibold text-sm">
                            Send Us Your Query, We Will Reply You In Next 24 Hours!
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <input className=" border-green-600 
                                border 
                    rounded-lg w-full py-2 px-4 mt-5 text-black  text-xs lg:text-sm uppercase" placeholder="Enter Your Name Here"
                                id="name" name='name' type="text" onChange={e => setName(e.target.value)} />
                            {
                                fieldError && name.length == 0 ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Name Cannot Be Empty</p>
                                    : ""
                            }

                            <input className=" border-green-600 
                                border 
                    rounded-lg  w-full mt-5 py-2 px-4  text-black  text-xs lg:text-sm" placeholder="Please Enter Valid Email Address"
                                id="email" name='email' type="text" onChange={e => setEmail(e.target.value)} />
                            {
                                fieldError && !email.includes('@') ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Enter The Valid Email Address</p>
                                    : ""
                            }
                            <input className=" border-green-600 
                                border 
                    rounded-lg  w-full py-2 mt-5  px-4  text-black text-xs lg:text-sm " placeholder=" Country Code + Contact Number"
                                id="number" name='phnumber' type="number" onChange={e => setPhnumber(e.target.value)} />
                            {
                                fieldError && phnumber.length == 0 ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Phone Number Cannot Be Empty</p>
                                    : ""
                            }

                            <textarea
                                rows="4"
                                className="block p-2.5 
                            mt-5 py-2 px-4
                                w-full
                                text-sm
                                text-black
                                bg-clip-padding 
                                transition
                                ease-in-out
                                rounded-lg
                                m-0
                                border-green-600 
                                border " placeholder="Enter Your Message Here"
                                id="message" name='message' type="text" onChange={e => setMessage(e.target.value)} />
                            {
                                fieldError && message.length == 0 ?
                                    <p className="  text-red-600 font-semibold text-xs ">*Message Cannot Be Empty</p>
                                    : ""
                            }
                              <div className=" rounded-lg mt-10 text-center ">
                            <button className="text-base font-medium rounded-full border-yellow-400 border shadow-2xl
                          px-7  lg:w-96 h-10 w-full    mt-5 lg:mt-0
                        text-center justify-center items-centercursor-pointer hover:bg-yellow-500 bg-transparent">
                                Send
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


