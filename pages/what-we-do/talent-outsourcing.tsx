import Image from "next/image";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi";
import WebAppCard from "../../components/Cards/WebAppCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function TechnologyConsulting() {
    return (
        <MainLayout
            title="Talent Outsourcing - Hire our Smart Virtual Tech Crew to Smoothly Sync up with your Team."
            description="Our creative thinkers give your story a voice and help you build a magnetic presence to increase visibility."
        >
            <Hero
                heading="Hire our Smart Virtual Tech Crew to Smoothly Sync up with your Team."
                para="Our creative thinkers give your story a voice and help you build a magnetic presence to increase visibility."
                btn="Get a Proposal"
                img="/images/talent-outsourcing.png"
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
                        img="/icons/talent-outsourcing1.svg"
                        title="Instantly Scalable"
                        desc="Use a flexible workforce to create custom project teams. The team size can be changed whenever."
                    />
                    <WebAppCard
                        img="/icons/talent-outsourcing2.svg"
                        title="Hassle-free Hiring"
                        desc="Save time, money, and resources in hiring by connecting with the greatest remote in-class talent."
                    />
                    <WebAppCard
                        img="/icons/talent-outsourcing3.svg"
                        title="Authentic Talent Pool"
                        desc="Connect with a workforce that is exceptionally talented, diversified, and mastered in their line of work."
                    />
                    <WebAppCard
                        img="/icons/talent-outsourcing4.svg"
                        title="Flexible and Dedicated Teams"
                        desc="We give you an elite team that works around the clock to deliver the greatest outcomes."
                    />
                    <WebAppCard
                        img="/icons/talent-outsourcing5.svg"
                        title="Boost-up Productivity"
                        desc="Leverage our expert teams to boost output outside of business hours with minimal oversight across time zones."
                    />
                    <WebAppCard
                        img="/icons/talent-outsourcing6.svg"
                        title="Affluent Communicators"
                        desc="Streamline communication and collaboration with our helpful English-speaking personnel."
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
                        <h3 className="mt-5 font-AvenirBold text-2xl">Collaborative tools</h3>
                        <Image src="/icons/talent-outsourcingTech.svg" width={570} height={180} />
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
