import Image from "next/image"
import products from "../../../img/products.png"

export default function Products() {
    return (
        <section id="products" className="pt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="mt-10 opacity-40">
                        <Image className="w-full h-full aspect-video ..."
                            alt="ATB"
                            src={products}
                            layout="responsive"
                        />
                    </div>

                    <div><h1 className="text-2xl md:text-5xl font-semibold ">Products</h1>
                        <h1 className="pt-10 text-sm lg:text-2xl font-semibold"> LSNetwork platform will have these (Products and utility )</h1>
                        <div className="text-sm lg:text-lg pt-10">
                            <ul className="list-disc ">
                                <li>LSN Mint - Minting your own project as NFT, Buying and selling of
                                    created content NFT</li>
                                <li>NXT CHILL Platform - Content viewing and subscription based
                                    platform Like Netflix</li>
                                <li>LSN Originals - Original Film and Series project will be produced with
                                    the leading production companies and talent around the globe.</li>
                                <li>LSN Crowfund - Creators can launch their projects for funding
                                    through NFT financing</li>
                                <li>LSN Seed - Seed funding for aspiring Filmmakers and content
                                    creators.
                                </li>
                                <li>LSN Tube - Freelancing and monetization platform for content
                                    creators</li>
                                <li>LSN Mobile app IOS/Android</li>
                                <li>Staking Protocol</li>
                            </ul>
                        </div>
                    </div>

                   
                </div>
        </section>
    )
} 