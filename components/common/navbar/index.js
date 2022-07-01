import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../img/icon.png"
import Image from 'next/image';
import { useState } from 'react'



export default function Navbar() {



  const Links = [
    { name: "Home", link: "#home" },
    { name: "Products", link: "#products" },
    { name: "About", link: "#aboutus" },
    { name: "Token", link: "#token" },
    { name: "Roadmap", link: "#roadmap" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contactus" }
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0 sticky p-1 z-50 bg-black opacity-80 border-b border-yellow-400'>
      <div className='md:flex items-center justify-between  '>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
          <div className="flex items-center flex-shrink-0  text-white ml-6 lg:ml-40 bg-transparent ">
            <a href="#home">
              <Image
                alt="ATB"
                src={logo}
                layout="fixed" priority
              />
            </a>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <button name={open ? 'close' : 'menu'}><div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div></button>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute mr-10
       md:static   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
        transition-all duration-500 ease-in ${open ? 'top-20 bg-black  lg:bg-transparent ' : 'top-[-490px] bg-transparent'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 -400 text-sm md:my-0 my-7'>
                <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <div className="lg:flex flex-1 inline-block text-sm  py-4   mr-20 leading-none  rounded">
            <button
              className="bg-white text-black  font-bold  rounded-full inline-flex lg:w-40 h-10 w-full    
              py-2 px-5 mx-4 text-center justify-center items-center"
            >
              <svg strokeWidth="0" viewBox="0 0 511.97 511.97" className="align-middle me-1 fill-[#f3ba2f]"
                height="22" width="22" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z">
                </path>
                  <path d="M156.56,215.14,256,115.71l99.47,99.47,57.86-57.85L256,0,98.71,157.28l57.85,57.85M0,256l57.86-57.87L115.71,256,57.85,313.83Zm156.56,40.85L256,396.27l99.47-99.47,57.89,57.82,0,0L256,512,98.71,354.7l-.08-.09,57.93-57.77M396.27,256l57.85-57.85L512,256l-57.85,57.85Z">
                  </path></g></svg>
              <span className="px-1  text-sm">BNB Chain</span>
            </button>
            <button className="bg-yellow-400 text-black font-semibold  px-7 mx-4 lg:w-40 h-10 w-full    mt-5 lg:mt-0
            text-center justify-center items-center rounded-full cursor-pointer hover:bg-yellow-500">
              Invest Now
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

