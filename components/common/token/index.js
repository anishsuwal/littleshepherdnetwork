

import Image from "next/image"
import aboutimg from "../../../img/about-img.svg"
import Countdown from "../countdown"

export default function Token() {
    return (
        <section id="token" className=" pt-28">

                <div className="flex flex-col justify-center  opacity-85">
                    <div><h1 className="text-2xl md:text-5xl font-semibold">Tokenomics </h1></div>
                    <div className="flex flex-col  mt-10 items-center">
                        <div className=" ring-1 p-2 md:p-10 rounded-2xl">
                        <p  className=" mt-5">
                            <span className="  text-xs lg:text-lg  text-center">Token Name : </span>
                            <span className="font-semibold text-center text-xs lg:text-lg px-2 text-yellow-400 ">
                                Little shepherd Network </span>
                        </p>
                        <p  className=" mt-5">
                            <span className="  text-xs lg:text-lg  text-center">Token Symbol : </span>
                            <span className="font-semibold text-center text-xs lg:text-lg px-2 text-yellow-400 ">
                                LSN </span>
                        </p>
                        <p  className=" mt-5">
                            <span className="  text-xs lg:text-lg  text-center">Token Type : </span>
                            <span className="font-semibold text-center text-xs lg:text-lg px-2 text-yellow-400 ">
                                BEP20 </span>
                        </p>
                        <div className="flex flex-row mt-10 justify-center gap-x-32  ">
                        <div >
                            <p className="  text-[10px] lg:text-sm text-left ">Platform </p>
                            <p className="font-semibold text-[10px] lg:text-xl text-left text-yellow-400">BSC</p>
                        </div>
                        <div>
                            <p className="  text-[10px] lg:text-sm text-left ">Total Supply </p>
                            <p className="font-semibold text-[10px] lg:text-lg text-left text-yellow-400">1000000000 ( 1 billion )
                            </p>
                        </div>
                    </div>
                        </div>
                    </div>                
                    <div className="flex flex-col  gap-x-10  opacity-85">
                        <div className="flex flex-col">
                            <div className="flex flex-row  text-[8px]  xl:text-xs  mt-10  justify-center items-center  text-center ">
                                <div className=" flex flex-col  justify-center items-center  text-center  bg-gradient-to-r from-green-400 to-green-500   rounded-l-xl w-28 h-24">
                                    <p><strong>35% </strong></p>
                                    <p>Presale</p>
                                </div>
                                <div className="flex flex-col  justify-center items-center  text-center   bg-gradient-to-r from-sky-400 to-sky-500  w-28 h-24">
                                    <p><strong>35% </strong></p><p>Liquidity</p>
                                </div>
                                <div className="flex flex-col  justify-center items-center  text-center   bg-gradient-to-r from-red-400 to-red-500  w-28 h-24">
                                    <p><strong>10% </strong></p><p>Early Investors</p>
                                </div>
                                <div className="flex flex-col  justify-center items-center  text-center   bg-gradient-to-r from-green-800 to-green-900 w-28 h-24 ">
                                    <p><strong>10% </strong></p><p>Development, Marketing and Partnership</p>
                                </div>
                              
                                <div className="flex flex-col  justify-center items-center  text-center   bg-gradient-to-r from-red-800 to-red-900 rounded-r-xl w-28 h-24 ">
                                <p><strong>10% </strong></p><p>Core Team</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center items-center text-center mt-10 lg:pl-20 lg:pr-20 xl:pl-40 xl:pr-40">
                            <h1 className="text-xl ">Transaction Tax
                            </h1>
                            <div className='justify-center items-center text-center mt-2 ring-1 rounded-xl'>
                                <div className="p-2 ">
                                    <p><strong>Sell </strong>10%</p>
                                </div>
                                <div className=" flex p-2 gap-x-5 sm:gap-x-10 md:gap-16 lg:gap-x-20 justify-center md:text-sm sm:text-xs   text-[10px]  ">
                                    <p><strong>3% <br /></strong>Burn Wallet</p>
                                    <p><strong>2% <br /></strong>Staking Holders</p>
                                    <p><strong>2% <br /></strong>Liquidity</p>
                                    <p><strong>2% <br /></strong>Marketing</p>
                                    <p><strong>1% <br /></strong>Creators Fund</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section >
    )
} 