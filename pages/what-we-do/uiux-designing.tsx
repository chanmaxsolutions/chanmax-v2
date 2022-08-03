import Image from "next/image";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi";
import WebAppCard from "../../components/Cards/WebAppCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function UIUXDesigning() {
    return (
        <MainLayout>
            <Hero
                heading="Visually Appealing Interfaces and powerful User Experiences."
                para="We apply critical design thinking to build human-centric, user-friendly products that capture the market."
                btn="Get a Proposal"
                img="/images/ui-ux.png"
                href="#get-a-proposal"
            />

            <div className="mx-auto max-w-[1194px] px-3">
                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[40px]">
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
                        img="/icons/ui-ux1.svg"
                        title="Extensive User Research"
                        desc="Engage in user research to study the aims and behaviour of your target groups to build the right solution."
                    />
                    <WebAppCard
                        img="/icons/ui-ux2.svg"
                        title="Interactive Prototypes"
                        desc="Create clickable prototypes to test your vision and try out different ideas to find the best one."
                    />
                    <WebAppCard
                        img="/icons/ui-ux3.svg"
                        title="Increased Site Conversion"
                        desc="Optimize your sites to turn your ambition into market solutions that keep users returning."
                    />
                    <WebAppCard
                        img="/icons/ui-ux4.svg"
                        title="Simple and Modern"
                        desc="We bring the perfect sync of simplicity and modernity to our solutions to advance you into the futuristic world."
                    />
                    <WebAppCard
                        img="/icons/ui-ux5.svg"
                        title="Memorable Experiences"
                        desc="By making a good first impression, we make sure that people remember you and know what you stand for."
                    />
                    <WebAppCard
                        img="/icons/ui-ux6.svg"
                        title="Robust Usability"
                        desc="We enhance usability and engagement through responsive designs for a seamless user journey."
                    />
                </div>
                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[40px]">
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
                        <Image src="/icons/ui-uxTech.svg" width={570} height={180} />
                        <div className="mt-[15px] flex items-center gap-x-2">
                            <p className="font-AvenirDemi text-lg">And more</p>
                            <HiOutlinePlus size={16} />
                        </div>
                    </div>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto max-w-5xl px-3">
                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[40px]">
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
                        <h2 className="text-center font-AvenirBold text-[34px] leading-[40px] lg:text-[50px] lg:leading-[60px]">
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
