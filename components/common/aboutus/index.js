import Image from "next/image"
import aboutimg from "../../../img/about-img.svg"

export default function aboutUs() {
    return (
        <section id="aboutus" className="delay-1000 pt-28  ">


                <div className="grid grid-cols-1 md:grid-cols-2">
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
                    <div className=" col-span-2 text-sm lg:text-lg pt-5"><p>They can earn up to 50% - 100%  of their referral sales through various
                        limited NFTs reward programmes. Not only that with our future subscription
                        plan, a huge percentage of income shall be shared with all the NFT
                        holders. We want to build a decentralized ecosystem around a streaming
                        service that would be owned by our audience. This would not only put
                        control in the hands of our audience, but would also benefit independent
                        filmmakers and artist</p>

                        <p className="pt-5 ">
                            With creating a collaborative workspace where the platform will assist its
                            audience and as well as content creators in carrying out their dream
                            projects building a sustainable ecosystem. LSNetwork is truly a unique
                            platform where the likes of Netflix, YouTube, and crowdfunding platforms
                            are all combined into one powerful ecosystem, for its audience and content
                            creators which is backed by the power of blockchain. The creators of
                            LSNetwork like to call it a content-based ecosystem with seed funding for
                            filmmakers or any kind of content creators. It helps put the artists work in
                            front of a mass audience which can help the artists gain recognition and
                            basking the appreciation whilst sharing the ownership of the project with its
                            audience and monetization opportunities like no other platform.

                        </p>
                    </div>
            </div>        
            </section>
    )
} 