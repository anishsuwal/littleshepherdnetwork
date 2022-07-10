import Image from "next/image"
import aboutimg from "../../../img/about-img.svg"

export default function Roadmap() {
    return (
        <section id="roadmap" className=" pt-28">


                <div className=" text-center">
                    <ul className="list-none mx-10">
                        <h1 className="text-2xl md:text-5xl font-bold">Roadmap</h1>
                        <li className="text-lg md:text-2xl font-bold mt-20">Startup</li>
                    </ul>

                    <ul className="list-none mx-10  text-sm mt-5">
                        <li>Startup Launchpads application.</li>
                        <li>Little shepherds Network token pre-sale</li>
                        <li>Little shepherd Network token launch</li>
                        <li>Marketing & Campaigning for the project.</li>
                        <li>Community building</li>
                        <li>White paper V.1</li>

                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 justify-between md:text-center 
                  mt-10 md:text-xs ">

                    <div className="  lg:text-center border-l md:border-l-0 py-10  ">
                        <ul className="list-none px-10 md:px-0 ">
                            <li className="text-xl font-bold">Phase - 1 </li>
                            <li>(July-September,2022)</li>
                        </ul>
                        <div className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4 -ml-2 md:hidden" />

                        <div className="relative md:flex py-5 items-center hidden">
                            <div className="flex-grow flex-1 border-t  border-gray-400"></div>
                            <span className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4" />
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <ul className="list-none mx-10  text-sm mt-5 md:hidden">
                            <li>Website launch</li>
                            <li>Staking program</li>
                            <li>First NFT reveal and Marketing</li>
                            <li>NFT Mint plaform Development</li>
                            <li>Listing on coin Gecko and coin market cap</li>
                            <li>LSN Seed Program launch</li>
                            <li>Team Doxing</li>
                            <li>Contract Audit</li>
                        </ul>
                    </div>
                    <div className="  lg:text-center border-l md:border-l-0  py-10 ">
                    <ul className="list-none px-10 md:px-0 ">
                            <li className="text-xl font-bold">Phase - 2 </li>
                            <li>(October-December,2022)</li>
                        </ul>
                        <div className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4 -ml-2 md:hidden" />

                        <div className="relative md:flex py-5 items-center hidden">
                            <div className="flex-grow flex-1 border-t  border-gray-400"></div>
                            <span className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4" />
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <ul className="list-none mx-10 lg:mx-[80px] text-sm mt-5 md:hidden">
                            <li>First limited Film NFT launch</li>
                            <li>Research and development for streaming server with self distribution plan.</li>
                            <li>Listing on Dex /Cex</li>
                            <li>Marketing and development of next limited film NFT project Launch</li>
                            <li>White Paper Updation</li>
                        </ul>
                    </div>
                    <div className="  lg:text-center border-l md:border-l-0  py-10 ">
                    <ul className="list-none px-10 md:px-0 ">
                            <li className="text-xl font-bold">Phase - 3 </li>
                            <li>( January-March,2023)</li>
                        </ul>
                        <div className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4 -ml-2 md:hidden" />

                        <div className="relative md:flex py-5 items-center hidden">
                            <div className="flex-grow flex-1 border-t  border-gray-400"></div>
                            <span className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4" />
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <ul className="list-none mx-10 lg:mx-14 text-sm mt-5 md:hidden">
                            <li>Listing on more tier -1 exchanges</li>
                            <li>Web based streaming server with self distribution though referral programs( beta launch)</li>
                            <li>Second premium limited NFT launch with extra rewards</li>
                            <li>Grand get together On completion of sell of second premium limited NFT
                                for holder in Dubai ( condition apply)</li>
                        </ul>
                    </div>
                    <div className="  lg:text-center border-l md:border-l-0 py-10  ">
                    <ul className="list-none px-10 md:px-0 ">
                            <li className="text-xl font-bold">Phase - 4 </li>
                            <li> ( April-June,2023)</li>
                        </ul>
                        <div className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4 -ml-2 md:hidden" />

                        <div className="relative md:flex py-5 items-center hidden">
                            <div className="flex-grow flex-1 border-t  border-gray-400"></div>
                            <span className="rounded-full shadow-lg ring-8 bg-yellow-400  w-4 h-4" />
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <ul className="list-none mx-10 lg:mx-0 text-sm mt-5 md:hidden">
                            <li>Promotion and marketing for the streaming server</li>
                            <li>Launch of streaming server for self distribution for all the NFT holders.</li>
                            <li>Interesting reward programs for all NFT holders.</li>
                            <li>More listing on cex</li>
                            <li>Reveal of the next premium limited NFT</li>
                            <li>More partnerships with big studios to bring more interesting films as premium limited NFTs</li>
                            <li>Bringing 100+ projects on the LSN plaform by the end of phase-4.White paper V.2</li>

                        </ul>
                    </div>
                    <div className="md:flex hidden text-xs lg:text-sm ">
                    <ul className="list-none ">
                            <li>Website launch</li>
                            <li>Staking program</li>
                            <li>First NFT reveal and Marketing</li>
                            <li>NFT Mint plaform Development</li>
                            <li>Listing on coin Gecko and coin market cap</li>
                            <li>LSN Seed Program launch</li>
                            <li>Team Doxing</li>
                            <li>Contract Audit</li>
                        </ul>
                    </div>
                    <div className="md:flex hidden text-xs lg:text-sm">
                        <ul className="list-none mx-10">
                            <li>First limited Film NFT launch</li>
                            <li>Research and development for streaming server with self distribution plan.</li>
                            <li>Listing on Dex /Cex</li>
                            <li>Marketing and development of next limited film NFT project Launch</li>
                            <li>White Paper Updation</li>
                        </ul></div>
                        <div className="md:flex hidden text-xs lg:text-sm">
                        <ul className="list-none mx-10">
                            <li>Listing on more tier -1 exchanges</li>
                            <li>Web based streaming server with self distribution though referral programs( beta launch)</li>
                            <li>Second premium limited NFT launch with extra rewards</li>
                            <li>Grand get together On completion of sell of second premium limited NFT
                                for holder in Dubai ( condition apply)</li>
                        </ul></div>
                        <div className="md:flex hidden text-xs lg:text-sm">
                         <ul className="list-none ">
                            <li>Promotion and marketing for the streaming server</li>
                            <li>Launch of streaming server for self distribution for all the NFT holders.</li>
                            <li>Interesting reward programs for all NFT holders.</li>
                            <li>More listing on cex</li>
                            <li>Reveal of the next premium limited NFT</li>
                            <li>More partnerships with big studios to bring more interesting films as premium limited NFTs</li>
                            <li>Bringing 100+ projects on the LSN plaform by the end of phase-4.White paper V.2</li>
                        </ul></div>
                </div>
        </section>
    )
} 