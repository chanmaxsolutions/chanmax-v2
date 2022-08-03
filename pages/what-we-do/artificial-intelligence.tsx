import Image from "next/image";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi";
import WebAppCard from "../../components/Cards/WebAppCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function ArtificialIntelligence() {
    return (
        <MainLayout
            title="Artificial Intelligence - Let's Change the Future of your Business with the AI Revolution."
            description="We are ready to fuel your transition to the next level with future-proof intelligent solutions."
        >
            <Hero
                heading="Let's Change the Future of your Business with the AI Revolution."
                para="We are ready to fuel your transition to the next level with future-proof intelligent solutions."
                btn="Get a Proposal"
                img="/images/ai.png"
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
                        img="/icons/ai1.svg"
                        title="Data Driven Transformation"
                        desc="We utilize data to produce sustainable solutions that assist data-driven decision making and analytics."
                    />
                    <WebAppCard
                        img="/icons/ai2.svg"
                        title="Intelligent Automation"
                        desc="Unleash self-evolving solutions that adapt to change, enhancing your application to survive future obstacles."
                    />
                    <WebAppCard
                        img="/icons/ai3.svg"
                        title="Insightful Decision Making"
                        desc="Using real-time data analytics, you can improve forecasting accuracy and the quality of strategic decisions."
                    />
                    <WebAppCard
                        img="/icons/ai4.svg"
                        title="Ai Powered Innovation"
                        desc="We offer smart solutions that future-proof your brand by blending technology and sustainability."
                    />
                    <WebAppCard
                        img="/icons/ai5.svg"
                        title="Intelligent Features"
                        desc="Strengthen your business agility and value by utilizing AI capabilities to your application's fullest potential."
                    />
                    <WebAppCard
                        img="/icons/ai6.svg"
                        title="Amplify your Impact"
                        desc="We enhance an influential company transition with out-of-the-box AI solutions that reflect your significance."
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
                        <h3 className="mt-5 font-AvenirBold text-2xl">Tools / Libraries / Frameworks</h3>
                        <Image src="/icons/aiTech.svg" width={570} height={180} />
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
