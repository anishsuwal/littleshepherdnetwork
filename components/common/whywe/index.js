import Image from "next/image"
import hall from "../../../img/hall.png"
import clips from "../../../img/mov-clips.png"
import camera from "../../../img/camera.png"



export default function WhyWe() {
    return (
        <section id="whyme" className=" pt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    <div className="mt-10 opacity-70 md:mt-40">
                        <Image className="w-full aspect-video ..."
                            alt="ATB"
                            src={hall}                            
                            layout="responsive"
                        />
                    </div>
                    <div><h1 className="text-2xl md:text-5xl font-semibold">Why LSN?</h1>
                        <h1 className="pt-10 text-lg lg:text-2xl  font-semibold"> How is it different from other similar projects?</h1>
                        <div className="text-sm lg:text-lg pt-10">
                            <ul className="list-disc">
                                <li>The projects will be distributed as limited NFTs ( 1000-10000 limitedNFTs)</li>
                                <li>NFTs buyers will be credited as producers.</li>
                                <li>They will be able to self distribute/rent these NFTs and earn from them
                                    though referral and reward programs.</li>
                                <li>Once our Subscription based NEXT CHILL platform is up and running,
                                    our NFT holders would be sharing 80% of total earning from the platform as
                                    per their nft holdings</li>
                                <li>On Completion of every Original Content NFTs sell for each project, 5%
                                    goes to creators Fund and 20% of total sell amount of the project would be
                                    used to buy native tokens from the open market and send it to burn wallets
                                    and respectively. This would help raise the price of the token as well as
                                    strengthen the token in the bear market.
                                </li>
                                                            </ul>
                        </div>
                    </div>

                    <div className="text-sm lg:text-lg pt-5">
                        <ul className="list-disc">
                            <li>Our sell tax system will fully support and strengthen the token as 10%
                                sell tax will be going to ( 30% burn wallet + 20% staking holders + 20%
                                Liquidity + 20% marketing + 10% creators Fund ).</li>
                            <li>Developing our subscription based streaming platform, ( 80% of all
                                earnings to its NFT holders, 5% to liquidity, 5% marketing and
                                development, 5% to buy back and burn, 3% to creators fund wallet and 2%
                                to founders.
                            </li>
                            <li>LSN token is a community focused DEFI token that forms parts of the
                                expanding LSN ecosystem. It is highly deflationary because it burns tokens
                                during transactions in the ecosystem on many levels.</li>
                           
                        </ul>
                    </div>
                    <div className="mt-10 ">
                        <Image className="w-full aspect-video ..."
                            alt="ATB"
                            src={clips}                            
                            layout="responsive"
                        />
                    </div>
                    <div className="mt-10 opacity-60">
                        <Image className="w-full aspect-video ..."
                            alt="ATB"
                            src={camera}                            
                            layout="responsive"
                        />
                    </div>
                   
                        <div className="text-sm lg:text-lg pt-10">
                            <ul className="list-disc">
                            <li> LSN project has the real products and utilities in the pipeline.
                            </li>
                            <li>We wish to create an ecosystem for independent filmmakers and artists
                                supported by decentralized financing systems to finance original films and
                                shows. That gives power into the hands of its audience and creators.</li>
                            <li>Create your own catalog of films and shows on our platform with NFTs
                                and start a fantastic passive income source while you are getting
                                entertained</li>

                            </ul>
                        </div>
                </div>
        </section>
    )
} 