import Image from "next/image"
import aboutimg from "../../../img/mov.png"
import { BaseLayout } from "components/layout"


export default function aboutUs() {
    return (
        <section id="aboutus" className="pt-[250px]" >

                <div className="grid grid-cols-1  md:grid-cols-2 ">
                    <div><h1 className="text-2xl md:text-5xl font-semibold">About US</h1>
                        <div className="text-sm lg:text-lg pt-16">
                            <p><span className="text-lg lg:text-2xl font-bold text-yellow-400">LSNetwork</span> is introducing The Worlds First Digital streaming Platform and
                                Marketplace through its NFTs on blockchain that aims to build a
                                collaborative content ecosystem with the core purpose of giving audience a
                                choice to own the content and use it for passive income, seed funding,
                                incubating and curating film makers and content producers around the
                                World.
                            </p>
                            <p className="pt-5 ">
                                <span className="text-lg lg:text-2xl font-bold text-yellow-400 text-center">LSNetwork</span> platform will create direct financing and investments for deserving
                                content creators, film professionals and media artists who have the talent
                                but not the resources giving them access to global investors through Nfts
                                sales as well as a global audience. As NFTs, they can buy and sell these
                                assets. Furthermore , our content owners will be able to use these NFT as
                                referrals to generate passive income by sharing it with a larger audience.

                            </p></div>
                    </div>
                    <div className="mt-10 ">
                        <Image className="w-full aspect-video ..."
                            alt="ATB"
                            src={aboutimg}
                            layout="responsive"
                        />
                    </div>
                   
            </div>        
            </section>
    )
} 

aboutUs.Layout = BaseLayout