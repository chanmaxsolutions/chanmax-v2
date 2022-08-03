import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Pages/Hero";
import MainLayout from "../layouts/Main";
import { ScrollBottomToTop } from "../utils/framerAnimation";

export default function Contact() {
    return (
        <MainLayout>
            <Hero
                heading="We are always Here to Hear you and Answer your Queries."
                para="Send us an email at any time with questions about general matters or sales, and we will get back to you."
                btn="Email Us"
                href="mailto:hello@chanmax.io"
                img="/images/contact-us-carousel 1.png"
            />

            <div className="mx-auto mt-[100px] max-w-[1194px] px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h2 className="text_line_img text-center font-AvenirBold text-[34px]">
                        Now we are in More Places.
                    </h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">Let's meet and make a difference together.</p>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <div className="mt-[50px] grid gap-[90px] px-3 lg:grid-cols-3 lg:px-[30px]">
                        <div className="flex flex-col items-center lg:items-start">
                            <Image src="/icons/elephant.svg" width={90.97} height={68.55} />
                            <h3 className="mt-5 font-AvenirBold text-2xl">Sri Lanka</h3>
                            <p className="mt-[17px] text-center text-lg lg:text-left">
                                #23A, Saltern Road, Grand Bazaar, Mannar, Sri Lanka - 41000
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <Image src="/icons/tiger.svg" width={90.97} height={68.55} />
                            <h3 className="mt-5 font-AvenirBold text-2xl">India</h3>
                            <p className="mt-[17px] text-center text-lg lg:text-left">
                                #25C/19-W, North 11 Street, Cumbum, Theni, TN, India - 625518
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <Image src="/icons/kangaroo.svg" width={90.97} height={68.55} />
                            <h3 className="mt-5 font-AvenirBold text-2xl">Australia</h3>
                            <p className="mt-[17px] text-center text-lg lg:text-left">
                                #24, Station Road, Wentworthville, NSW, Australia - 2145
                            </p>
                        </div>
                    </div>
                </ScrollBottomToTop>
            </div>

            <ScrollBottomToTop>
                <div className="mx-auto mt-[104px] max-w-7xl rounded-[10px] bg-primary px-3 selection:bg-dark selection:text-white">
                    <div className="w-full rounded-[10px] py-[109px] text-center">
                        <h1 className="mx-auto max-w-[1084px] px-3 text-center font-AvenirBold text-[34px] leading-[40px] lg:text-[50px] lg:leading-[60px]">
                            Looking for a Passionate Team to Build your Idea? You've Found it.
                        </h1>
                        <Link href={{ hash: "get-a-proposal" }}>
                            <button className="btn-red mt-[54px] text-[28px]">Get a Proposal</button>
                        </Link>
                    </div>
                </div>
            </ScrollBottomToTop>
        </MainLayout>
    );
}
