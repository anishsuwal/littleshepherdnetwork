

import Image from "next/image"
import aboutimg from "../../../img/about-img.svg"
import Countdown from "../countdown"

export default function Token() {
    return (
        <section id="token" className="delay-1000">

            <div className=" lg:p-10 p-2 lg:mx-28   ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20  text-white  opacity-85">
                    <div><h1 className="text-5xl font-semibold">Tokennomics </h1>
                        <div className="text-lg pt-16">
                            <p>Online streaming services were a watershed moment in the entertainment
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
                    </div>
                    <div className="mt-20 justify-between items-center text-center">
                        <Countdown />

                        <div className='flex flex-1 text-[10px] mt-10   lg:text-xs justify-center items-center  text-center  m-2 '>

                            <div className="p-2  bg-gradient-to-r from-green-400 to-green-500  rounded-l-xl ">
                                <p><strong>35% </strong>Presale</p>
                            </div>
                            <div className="p-2  bg-gradient-to-r from-sky-400 to-sky-500  ">
                                <p><strong>35% </strong>Liquidity</p>
                            </div>
                            <div className="p-2  bg-gradient-to-r from-red-400 to-red-500  ">
                                <p><strong>10% </strong>Early Investors</p>
                            </div>
                            <div className="p-2  bg-gradient-to-r from-green-800 to-green-900  ">
                                <p><strong>10% </strong>Team Members</p>
                            </div>
                            <div className="p-2  bg-gradient-to-r from-sky-800 to-sky-900  ">
                                <p><strong>5% </strong>Core Team</p>
                            </div>
                            <div className="p-2  bg-gradient-to-r from-red-800 to-red-900 rounded-r-xl ">
                                <p><strong>5% </strong>Founder</p>
                            </div>

                        </div>
                        <div className='flex flex-1 py-5 justify-between '>
                            <div>
                                <p className="  text-md text-center">Token Name </p>
                                <p className="font-semibold text-center text-lg px-2 text-yellow-400 ">little shepherd Network </p>
                            </div>
                            <div className=''>
                                <p className="  text-md ">Token Symbol </p>
                                <p className="font-semibold text-center text-lg text-yellow-400 ">LSN </p>
                            </div>
                            <div className='mr-2'>
                                <p className="  text-md ">Token Type </p>
                                <p className="font-semibold text-center text-lg text-yellow-400">ERC20 </p>
                            </div>
                        </div>
                        <h1 className="text-lg mt-10">Transaction tax
                        </h1>
                        <div className='flex-1 justify-between items-center text-center   m-2 border-yellow-400 border rounded-xl'>
                            <div className="p-2 border-b-yellow-400 border-b  ">
                                <p><strong>Buy </strong>0%</p>
                            </div>
                            <div className="p-2    ">
                                <p><strong>Sell </strong>10%</p>
                            </div>
                            <div className=" flex p-2 justify-between lg:text-sm  text-[12px]  ">
                                <p><strong>30% <br /></strong>Burn Wallet</p>
                                <p><strong>20% <br /></strong>Staking Holders</p>
                                <p><strong>20% <br /></strong>Liquidity</p>
                                <p><strong>20% <br /></strong>Marketing</p>
                                <p><strong>10% <br /></strong>Creators Fund</p>

                            </div>

                        </div>

                        <div className='flex  m-2 mt-10 shadow-inner justify-center items-center text-center   rounded-2xl bg-white '>
                            <div className="m-2 rounded-full">
                                <p className=" text-xm text-black pr-5 ">Hard cap </p>
                                <p className="font-semibold  text-xl text-cyan-500 pr-5 border-r-2">10.000 ETH </p>
                            </div>
                            <div className="m-2">
                                <p className="  text-xm text-black pr-5">Soft cap</p>
                                <p className="font-semibold pr-5 text-xl text-red-500 border-r-2">1.000 ETH </p>
                            </div>
                            <div className="m-2 ">
                                <p className="   text-xm text-black ">Cost of 1 LSN Token </p>
                                <p className="font-semibold  text-xl text-green-500">0.001 ETH </p>
                            </div>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div className='px-5'>
                                <p className="  text-md text-left ">Platform </p>
                                <p className="font-semibold text-xl text-left ">Ethereum</p>
                            </div>

                            <div >
                                <p className="  text-md text-left ">Total Supply </p>
                                <p className="font-semibold text-lg text-left ">1000000000 <span className="text-yellow-400">LSN</span> </p>

                            </div>
                            <button
                                type="button"
                                className=" shadow-2xl bg-yellow-400 text-black font-semibold py-2 px-7 mx-4 
                                           w-40 mt-2 text-center justify-center items-center rounded-full cursor-pointer 
                                           hover:bg-yellow-500">

                                Invest Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
} 