import Image from "next/image";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi";
import WebAppCard from "../../components/Cards/WebAppCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function WebDevelopment() {
    return (
        <MainLayout
            title="Web Development - Authenticate your Legacy and Position your Brand to stand out"
            description="Our creative thinkers give your story a voice and help you build a magnetic presence to increase visibility."
        >
            <Hero
                heading="Authenticate your Legacy and Position your Brand to stand out"
                para="Our creative thinkers give your story a voice and help you build a magnetic presence to increase visibility."
                btn="Get a Proposal"
                img="/images/business-branding.png"
                href="#get-a-proposal"
            />

            <div className="mx-auto max-w-[1194px] px-3">
                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[1.2em]">
                        Why Choose us among many?
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[30px] text-center text-2xl">
                        Choosing us is the right decision for a variety of reasons.
                    </p>
                </ScrollBottomToTop>

                <div className="mt-14 grid gap-[2px] bg-[#F2F2F2] lg:grid-cols-3">
                    <WebAppCard
                        img="/icons/business-branding1.svg"
                        title="Different and Unique"
                        desc="We give you a unique look that changes the way people see you because you're special."
                    />
                    <WebAppCard
                        img="/icons/business-branding2.svg"
                        title="Timeless Aesthetics"
                        desc="Beat the limits of changing trends with a promising look that keeps you current and useful over time."
                    />
                    <WebAppCard
                        img="/icons/business-branding3.svg"
                        title="Attract Attention Instantly"
                        desc="Stand out in the crowd and draw the attention of everyone around you with an appealing gaze."
                    />
                    <WebAppCard
                        img="/icons/business-branding4.svg"
                        title="Simple and Elegant"
                        desc="Combining clutter-free materials and harmonious tones creates a visually strong brand identity."
                    />
                    <WebAppCard
                        img="/icons/business-branding5.svg"
                        title="Broadcast Brand Value"
                        desc="We pay attention to the slightest details to establish a brand image that represents you."
                    />
                    <WebAppCard
                        img="/icons/business-branding6.svg"
                        title="Versatile Applications"
                        desc="Expose your uniqueness on many platforms without sacrificing distinctiveness."
                    />
                </div>

                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[1.2em]">
                        Our Tech Tools.
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[30px] text-center text-2xl">
                        We use modern technology and powerful tools to build your dream.
                    </p>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <div className="mx-auto mt-14 rounded-[10px] bg-[#E7E8EA] p-[30px] lg:w-[670px] lg:p-[30px]">
                        <h3 className="mt-5 font-AvenirBold text-2xl">Design / Analytics / Research</h3>
                        <Image src="/icons/business-brandingTech.svg" width={570} height={180} />
                        <div className="mt-[15px] flex items-center gap-x-2">
                            <p className="font-AvenirDemi text-lg">And more</p>
                            <HiOutlinePlus size={16} />
                        </div>
                    </div>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto max-w-5xl px-3">
                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[1.2em]">
                        Bring your Ideas to Life.
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[30px] text-center text-2xl">
                        Cross over into the digital sphere, and find out what you're capable of with customized apps
                        that boost the effectiveness of your stand. Our tech-savvy staff is the perfect partner to bring
                        your ideas to life. We will make web apps that are strong and can grow with your business. This
                        will help you achieve your business goals.
                    </p>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <div className="mt-[50px] grid items-center gap-[42.5px] selection:bg-dark selection:text-white lg:grid-cols-2">
                        <div className="h-min rounded-[10px] bg-primary py-[116.2px] pl-8 pr-14 font-AvenirDemi text-lg">
                            <ul className="list-icon">
                                <li>
                                    We have the bravery to evolve and the honesty and integrity to confess when we are
                                    wrong.
                                </li>
                                <li>
                                    We are committed to any endeavour with both our hearts and minds. Never execute a
                                    task half-heartedly.
                                </li>
                                <li>
                                    Our customers motivate us to achieve greatness. We work hard to exceed their
                                    expectations.
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <Image src="/images/web-development2.png" width={469.5} height={442.63} />
                        </div>
                    </div>
                </ScrollBottomToTop>

                <div className="my-[239px] text-center">
                    <ScrollBottomToTop>
                        <h2 className="text-center font-AvenirBold text-[34px] leading-[1.2em] lg:text-[50px] ">
                            Let's Work Together to make a difference in your Business.
                        </h2>
                    </ScrollBottomToTop>
                    <ScrollBottomToTop>
                        <Link href={{ hash: "get-a-proposal" }}>
                            <button className="btn-red mt-[54px]">Get a Proposal</button>
                        </Link>
                    </ScrollBottomToTop>
                </div>
            </div>
        </MainLayout>
    );
}
