import Image from "next/image";
import Link from "next/link";
import WebAppCard from "../../components/Cards/WebAppCard";
import WebAppTechCard from "../../components/Cards/WebAppTechCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function WebDevelopment() {
    return (
        <MainLayout>
            <Hero
                heading="Build your brand's potential with Customized Web Apps."
                para="Our team can help you build your company by developing cutting-edge web apps."
                btn="Get a Proposal"
                img="/images/web-development.png"
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
                        img="/icons/web-app-development1.svg"
                        title="Innovate and Compete"
                        desc="Deploy innovative solutions to keep you ahead of the competition and add value to your process."
                    />
                    <WebAppCard
                        img="/icons/web-app-development2.svg"
                        title="Future Proof Your Business"
                        desc="Set long-term goals to ensure that the applications we design are flexible and can evolve as trends shift."
                    />
                    <WebAppCard
                        img="/icons/web-app-development3.svg"
                        title="Experts with Experience"
                        desc="Hands-on experience in the field of web development is supplemented by in-depth domain research."
                    />
                    <WebAppCard
                        img="/icons/web-app-development4.svg"
                        title="Accelerate Your Transition"
                        desc="Speed up your deployments to the market with dynamic applications that authenticate your position."
                    />
                    <WebAppCard
                        img="/icons/web-app-development5.svg"
                        title="Enhanced User Experience"
                        desc="Apart from technical expertise, passionate user experience designers will create seamless user flows."
                    />
                    <WebAppCard
                        img="/icons/web-app-development6.svg"
                        title="Complexity to Simplicity"
                        desc="With the assistance of our critical thinkers, we simplify your complex business procedures."
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

                <div className="mt-14 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                    <WebAppTechCard heading="Front-end" img="/icons/webAppTech1.svg" />
                    <WebAppTechCard heading="Backend" img="/icons/webAppTech2.svg" />
                    <WebAppTechCard heading="Database" img="/icons/webAppTech3.svg" />
                    <WebAppTechCard heading="Cms & headless cms" img="/icons/webAppTech4.svg" />
                    <WebAppTechCard heading="Cloud & payment" img="/icons/webAppTech5.svg" />
                    <WebAppTechCard heading="Design" img="/icons/webAppTech6.svg" />
                </div>
            </div>

            <div className="mx-auto max-w-5xl px-3 lg:px-0">
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
