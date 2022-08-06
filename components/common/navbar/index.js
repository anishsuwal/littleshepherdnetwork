import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../img/logo.jpeg"
import Image from 'next/image';
import { useState } from 'react'



export default function Navbar() {



  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#aboutus" },
    { name: "Products", link: "#products" },
    { name: "Token", link: "#token" },
    { name: "Roadmap", link: "#roadmap" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contactus" }
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0 sticky p-1 z-50 bg-black opacity-80 border-b border-yellow-400 text-white'>
      <div className='flex items-center justify-between  '>
        <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
          <div className="flex items-center flex-shrink-0  text-white ml-6 xl:ml-40 bg-transparent ">
            <a href="#home">
              <Image
                alt="ATB"
                src={logo}
                layout="fixed"
                width={250}
                height={100}
                priority
              />
            </a>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          <button name={open ? 'close' : 'menu'}><div className="w-5 h-1 bg-yellow-400 mb-1"></div>
            <div className="w-5 h-1 bg-yellow-400 mb-1"></div>
            <div className="w-5 h-1 bg-yellow-400"></div></button>
        </div>
        <ul className={`lg:flex lg:items-center  lg:pb-0 pb-12 absolute  
       lg:static   lg:z-auto z-[-1] right-0 items-center lg:w-auto lg:pl-0 pl-9
        transition-all duration-500 ease-in ${open ? 'top-20 bg-black  lg:bg-transparent ' : 'top-[-490px] bg-transparent'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8  text-sm lg:my-0 my-7 text-right pr-20 lg:pr-0  '>
                <a href={link.link} onClick={() => setOpen(!open)} className='text-white  hover:text-yellow-400 duration-500'>{link.name}</a>
              </li>
            )) 
          }
          <div className="lg:flex flex-1 inline-block text-sm  py-4   mr-20 leading-none  rounded">
            <button
              className="bg-transparent border-yellow-400 border shadow-2xl   text-base font-medium rounded-full inline-flex lg:w-40 h-10 w-full    
              py-2 px-5 mx-4 text-center justify-center items-center hover:bg-yellow-500"
            >
              <span className="px-1  text-sm">Buy Tokens</span>
            </button>
            <button href="../../../public/Whitepaper.pdf" className="text-base font-medium rounded-full border-yellow-400 border shadow-2xl  px-7 mx-4 lg:w-40 h-10 w-full    mt-5 lg:mt-0
            text-center justify-center items-center cursor-pointer hover:bg-yellow-500 bg-transparent">
              Whitepaper 
              </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

