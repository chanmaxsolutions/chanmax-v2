import Image from "next/image";

import { Image as AntImage } from "antd";

import Hero from "../components/Pages/Hero";
import MainLayout from "../layouts/Main";
import { ScrollBottomToTop } from "../utils/framerAnimation";
import Link from "next/link";

export default function About() {
    return (
        <MainLayout
            title="Who We Are - Our Goal is to Help our Customers Achieve Long-term Success"
            description="We build future-proof applications that make you stand out as the best option on the market."
        >
            <Hero
                heading="Our Goal is to Help our Customers Achieve Long-term Success"
                para="We build future-proof applications that make you stand out as the best option on the market."
                btn="Get a Proposal"
                img="/images/who-we-are-carousel 1.png"
                href="#get-a-proposal"
            />

            <div className="mx-auto mt-[100px] max-w-5xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h2 className="text_line_img text-center font-AvenirBold text-[34px]">
                        Statistics that tell our Journey
                    </h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">
                        We've accomplished so much in such a short period of time.
                    </p>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <div className="mt-[49px] grid text-center lg:grid-cols-4 lg:text-left">
                        <div>
                            <h1 className="font-AvenirBold text-[60px]">2021</h1>
                            <p className="font-AvenirDemi text-2xl">Year of Founded</p>
                        </div>
                        <div>
                            <h1 className="font-AvenirBold text-[60px]">08+</h1>
                            <p className="font-AvenirDemi text-2xl">Served Countries</p>
                        </div>
                        <div>
                            <h1 className="font-AvenirBold text-[60px]">20+</h1>
                            <p className="font-AvenirDemi text-2xl">Trusted Clients</p>
                        </div>
                        <div>
                            <h1 className="font-AvenirBold text-[60px]">30+</h1>
                            <p className="font-AvenirDemi text-2xl">Completed Projects</p>
                        </div>
                    </div>
                </ScrollBottomToTop>

                <hr className="mt-5 h-[2px] w-full bg-[#F2F2F2]" />
            </div>

            <div className="mx-auto mt-[100px] max-w-5xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h2 className="text_line_img text-center font-AvenirBold text-[34px]">How it all Started?</h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">
                        It all started with a big dream and a great vision.
                    </p>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <div className="mt-[50.34px]">
                        <Image src="/images/about_team.png" width={1024} height={563.34} />
                    </div>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <p className="mx-auto mt-[50.31px] max-w-3xl px-3 text-lg lg:px-0">
                        Chanmax was founded in 2018 by Prashan, a UIUX designer who had previously worked as a graphic
                        designer. Prashan was the only person in Chanmax, who handled design and wordpress developments.
                        <br />
                        <br />
                        Chanmax gradually started getting more projects because customers were satisfied with its
                        services and started recommending it to more of their friends.
                        <br />
                        <br />
                        In 2020, Prashan got an opportunity to participate in a coding accelerator program that was
                        offered by Uki, an initiative of Yarl IT Hub, which was the first turning point that helped
                        Chanmax turn into a software development company from a design firm.
                        <br />
                        <br />
                        Prashan met like-minded individuals, Raghu and Tharsha, who were really curious about coding and
                        the software development industry. From that point, the work to establish Chanmax as a
                        full-stack software development company started.
                        <br />
                        <br />
                        After registering as a full-fledged software development company in 2021, Chanmax was committed
                        to providing high-quality software solutions all over the world from northern Sri Lanka. Today
                        we are working on numerous projects with businesses from 8 countries.
                    </p>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto mt-[50px] max-w-5xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h2 className="text_line_img text-center font-AvenirBold text-[34px]">We have a Mission.</h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">
                        Our mission is always there to help us along the way.
                    </p>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <div className="mt-[50px] flex flex-col items-center gap-[30px] rounded-[10px] bg-[#FFF1B2] p-[30px] selection:bg-dark selection:text-white lg:flex-row">
                        <Image src="/icons/who-we-are-icon.svg" width={305.62} height={289.7} />
                        <p className="max-w-[628px] text-2xl leading-[1.2em] lg:text-[30px]">
                            Building world-class products using local talents (from the motherland) and empowering the
                            community from the grassroot through creating job opportunities.
                        </p>
                    </div>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto mt-[100px] max-w-7xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h2 className="text_line_img text-center font-AvenirBold text-[34px]">Sri Lanka is a Paradise.</h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">Sri Lanka is rich in culture and natural beauty.</p>
                </ScrollBottomToTop>

                <div className="mt-[81px] grid grid-cols-3 gap-[10px] lg:gap-[30.33px]">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <ScrollBottomToTop key={i}>
                            {/* width={406.67} height={400} */}
                            <AntImage src={`/images/about_gallery/${i + 1}.webp`} width="100%" height="100%" />
                        </ScrollBottomToTop>
                    ))}
                </div>
            </div>

            <ScrollBottomToTop>
                <div className="mx-auto mt-[104px] max-w-7xl rounded-[10px] bg-primary px-3 selection:bg-dark selection:text-white">
                    <div className="w-full rounded-[10px] py-[109px] text-center">
                        <h1 className="mx-auto max-w-5xl px-3 text-center font-AvenirBold text-[34px] leading-[1.2em] lg:text-[50px] ">
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
