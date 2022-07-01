

import Image from "next/image"
import aboutimg from "../../../img/about-img.svg"
import Countdown from "../countdown"

export default function Token() {
    return (
        <section id="token" className="delay-1000">

            <div className=" lg:p-10 p-2 lg:mx-28   ">

                <div className="flex flex-col text-white  opacity-85">
                    <div><h1 className="text-5xl font-semibold">Tokennomics </h1></div>
                    <div className="text-lg pt-16">
                        <p >
                            Online streaming services were a watershed moment in the entertainment
                            industry over the last decade. Anyone can watch their favorite shows and
                            films on YouTube, Prime Video, Netflix, and other platforms. The video
                            streaming market is expected to reach US$ 50 billion in 2022, with a CAGR
                            of more than 17 percent from 2022 to 2032, accumulating a market value of
                            US$ 241 billion. However, with this advancement comes centralized control
                            over content by large production houses and studios. You can not own it or
                            share it with your friends or loved ones like you could with physical assets
                            like DVDs in the past. Furthermore, once you have paid your subscription,
                            you have no true value in terms of ownership. We would like to change that
                            with our innovative ecosystem of streaming platforms on the blockchain
                            and make it more affordable</p>
                        <p className="mt-10"> The BNB smart chain would serve as the foundation for our native token
                            <span className="text-xl font-bold text-yellow-400"> little shepherd Network Or LSN token. </span>
                            It will be used as a transaction tool
                            on the streaming server to buy and sell NFTs. It can be traded on the
                            available DEX/CEX. Our native token can be staked for passive income
                            through our future staking programmes.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-x-10 text-white  opacity-85">
                        <div className="flex flex-col">
                            <div className="flex flex-row  text-[8px]  xl:text-xs  mt-20  justify-center items-center  text-center ">
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
                                <div className="flex flex-col  justify-center items-center  text-center   bg-gradient-to-r from-sky-800 to-sky-900 w-28 h-24 ">
                                    <p><strong>5% </strong></p><p>Core Team</p>
                                </div>
                                <div className="flex flex-col  justify-center items-center  text-center   bg-gradient-to-r from-red-800 to-red-900 rounded-r-xl w-28 h-24 ">
                                    <p><strong>5% </strong></p><p>Founder</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-5 justify-between"><div>
                                <p className="  text-xs lg:text-md text-center">Token Name </p>
                                <p className="font-semibold text-center text-xs lg:text-lg px-2 text-yellow-400 ">little shepherd Network </p>
                            </div>
                                <div className=''>
                                    <p className="  text-xs lg:text-md ">Token Symbol </p>
                                    <p className="font-semibold text-center text-xs lg:text-lg text-yellow-400 ">LSN </p>
                                </div>
                                <div className='mr-2'>
                                    <p className="  text-xs lg:text-md ">Token Type </p>
                                    <p className="font-semibold text-center text-xs lg:text-lg text-yellow-400">ERC20 </p>
                                </div></div>
                        </div>
                        <div className="justifi-center items-center text-center mt-10">
                            <h1 className="text-xl ">Transaction Tax
                            </h1>
                            <div className='flex-1 justify-between items-center text-center   border-yellow-400 border rounded-xl'>
                                <div className="p-2 border-b-yellow-400 border-b  ">
                                    <p><strong>Buy </strong>0%</p>
                                </div>
                                <div className="p-2    ">
                                    <p><strong>Sell </strong>10%</p>
                                </div>
                                <div className=" flex p-2 gap-x-5 justify-between lg:text-sm  text-[9px]  ">
                                    <p><strong>30% <br /></strong>Burn Wallet</p>
                                    <p><strong>20% <br /></strong>Staking Holders</p>
                                    <p><strong>20% <br /></strong>Liquidity</p>
                                    <p><strong>20% <br /></strong>Marketing</p>
                                    <p><strong>10% <br /></strong>Creators Fund</p>
                                </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="flex gap-x-5 md:gap-x-16 mt-5 md:mt-0 ">
                            <div className='px-5'>
                                <p className="  text-[10px] lg:text-md text-left ">Platform </p>
                                <p className="font-semibold text-[10px] lg:text-xl text-left ">Ethereum</p>
                            </div>

                            <div>
                                <p className="  text-[10px] lg:text-md text-left ">Total Supply </p>
                                <p className="font-semibold text-[10px] lg:text-lg text-left ">1000000000 <span className="text-yellow-400">LSN</span> </p>

                            </div>
                            <div>
                            <button
                                type="button"
                                className=" shadow-2xl bg-yellow-400 text-black font-semibold py-2 px-3 md:px-7 lg:mx-4 
                                           lg:w-40 text-center justify-center items-center rounded-full cursor-pointer 
                                           hover:bg-yellow-500">

                                Invest Now
                            </button>
                            </div></div>

                </div>


            </div>
        </section >
    )
} 