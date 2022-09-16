import Image from "next/image";
import Link from "next/link";
import WebAppCard from "../../components/Cards/WebAppCard";
import WebAppTechCard from "../../components/Cards/WebAppTechCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function MobileAppDevelopment() {
    return (
        <MainLayout
            title="Mobile App Development - Elevate your Digital Heritage with world-class, agile Mobile Apps."
            description="We are a skilled company devoted to developing custom mobile apps that provide results."
        >
            <Hero
                heading="Elevate your Digital Heritage with world-class, agile Mobile Apps."
                para="We are a skilled company devoted to developing custom mobile apps that provide results."
                btn="Get a Proposal"
                img="/images/mobile-development.png"
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
                        img="/icons/mobile-app-development1.svg"
                        title="Innovate Experiences"
                        desc="Enhance your app's user involvement for active engagement with unmatched mobile experiences."
                    />
                    <WebAppCard
                        img="/icons/mobile-app-development2.svg"
                        title="Minimalist and Simple"
                        desc="Deploy conservative apps that boost the value of your brand and match user demands."
                    />
                    <WebAppCard
                        img="/icons/mobile-app-development3.png"
                        title="Best-In-class Security"
                        desc="Use top security practises to secure your app's reliability and increase your credibility."
                    />
                    <WebAppCard
                        img="/icons/mobile-app-development4.svg"
                        title="User-centered Solutions"
                        desc="Our solutions are intended to deliver consumers the most powerful and helpful outcomes."
                    />
                    <WebAppCard
                        img="/icons/mobile-app-development5.svg"
                        title="World-class Quality"
                        desc="Our product development cycle includes user research, testing, and maintenance to ensure app quality."
                    />
                    <WebAppCard
                        img="/icons/mobile-app-development6.svg"
                        title="Customized Solutions"
                        desc="Meet your company's demands with customized, agile apps that deliver quickly with quality."
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

                <div className="mt-14 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                    <WebAppTechCard heading="Front-end" img="/icons/mobileAppTech1.svg" />
                    <WebAppTechCard heading="Backend" img="/icons/mobileAppTech2.svg" />
                    <WebAppTechCard heading="Database" img="/icons/mobileAppTech3.svg" />
                    <WebAppTechCard heading="Cms & headless cms" img="/icons/mobileAppTech4.svg" />
                    <WebAppTechCard heading="Cloud & payment" img="/icons/mobileAppTech5.svg" />
                    <WebAppTechCard heading="Design" img="/icons/mobileAppTech6.svg" />
                </div>
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
