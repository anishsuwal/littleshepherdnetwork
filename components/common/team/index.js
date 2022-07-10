import Image from "next/image"
import logo from "../../../img/founder.png"

export default function Team() {
    return (
        <section id="team" className=" pt-28">
                <div className="flex ">
                    <div>

                        <h1 className="  md:text-5xl text-2xl font-bold">Team</h1>
                        <div className="text-sm md:text-lg pt-10">
                            <p>The team are seasoned professionals with proven track records with high performing
                                bussiness in the media, online video and technology sectors</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 justify-between items-center text-lg p-10">
                    <div className="flex flex-col justify-center items-center">
                        <Image className=" aspect-video rounded-full ring w-28 h-28"
                            alt="ATB"
                            src={logo}
                            layout='fixed'
                            height={200}
                            width={200}
                            priority
                        />
                        <span className="mt-5">Technology</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className=" aspect-video rounded-full ring w-28 h-28"
                            alt="ATB"
                            src={logo}
                            layout='fixed'
                            height={200}
                            width={200}
                            priority
                        />
                        <span className="mt-5">Technology</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className=" aspect-video rounded-full ring w-28 h-28"
                            alt="ATB"
                            src={logo}
                            layout='fixed'
                            height={200}
                            width={200}
                            priority
                        />
                        <span className="mt-5">Technology</span>
                    </div>
                </div>
        </section>
    )
} 