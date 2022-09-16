import Link from "next/link";
import ApproachCard from "../components/Cards/ApproachCard";
import Hero from "../components/Pages/Hero";
import MainLayout from "../layouts/Main";
import { OpacityFramer, ScrollBottomToTop } from "../utils/framerAnimation";

export default function Approch() {
    return (
        <MainLayout
            title="How we do it - Our Software Development Method is Simplified and Efficient."
            description="The way we develop software is designed to give solutions to the highest satisfaction."
        >
            <Hero
                heading="Our Software Development Method is Simplified and Efficient."
                para="The way we develop software is designed to give solutions to the highest satisfaction."
                btn="Get a Proposal"
                img="/images/how-we-do-it-carousel 1.png"
                href="#get-a-proposal"
            />

            <div className="mx-auto mt-[100px] max-w-5xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h2 className="text_line_img text-center font-AvenirBold text-[34px]">Our Approach is Simple.</h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">
                        we strive to keep things as simple and straightforward as possible.
                    </p>
                </ScrollBottomToTop>

                <div className="relative mt-[50px]">
                    <OpacityFramer>
                        <div className="absolute left-[50%] h-full w-[2px] bg-[url('/icons/vertical-line.svg')]" />
                    </OpacityFramer>
                    <div className="flex flex-col gap-y-[150px]">
                        <ApproachCard
                            bg="#FFF1B2"
                            img="/icons/approach-icon 1.svg"
                            heading="Customer Enquiry"
                            para="We'll be having multiple meetings to deeply understand our customers' needs and expectations."
                        />
                        <ApproachCard
                            bg="#FFF8D9"
                            img="/icons/approach-icon 2.svg"
                            heading="Proposal"
                            para="Based on the information received, we'll provide a quote for the product's cost and development time."
                        />
                        <ApproachCard
                            bg="#FFF1B2"
                            img="/icons/approach-icon 3.svg"
                            heading="Project Kickoff"
                            para="Once the proposal is approved, we'll have a project kickoff meeting to deliver it to our technical team and start work."
                        />
                        <ApproachCard
                            bg="#FFF8D9"
                            img="/icons/approach-icon 4.svg"
                            heading="Requirement Analysis"
                            para="We'll transform high-level needs from the inquiry phase into clear, traceable, comprehensive, consistent, and stakeholder-approved standards."
                        />
                        <ApproachCard
                            bg="#FFF1B2"
                            img="/icons/approach-icon 5.svg"
                            heading="Design and prototyping"
                            para="We present a flavour of ideas with mood boards, interactive clickable prototypes, and aesthetic visuals to validate your idea."
                        />
                        <ApproachCard
                            bg="#FFF8D9"
                            img="/icons/approach-icon 6.svg"
                            heading="Code and development"
                            para="On approval of the design assets, we kickstart test-driven coding and development, giving life to your products."
                        />
                        <ApproachCard
                            bg="#FFF1B2"
                            img="/icons/approach-icon 7.svg"
                            heading="Testing"
                            para="We do exhaustive testing on the final outputs in order to ensure a quick and smooth functioning."
                        />
                        <ApproachCard
                            bg="#FFF8D9"
                            img="/icons/approach-icon 8.svg"
                            heading="Build and release"
                            para="We will roll out the product and check to see that it functions faultlessly once it's on the market."
                        />
                        <ApproachCard
                            bg="#FFF1B2"
                            img="/icons/approach-icon 9.svg"
                            heading="Support"
                            para="We will always be ready to walk with you and ensure the consistent and smooth flow of operations of our solutions."
                        />
                    </div>
                </div>
            </div>

            <ScrollBottomToTop>
                <div className="mx-auto mt-[104px] max-w-7xl rounded-[10px] bg-primary px-3 selection:bg-dark selection:text-white">
                    <div className="w-full rounded-[10px] py-[109px] text-center">
                        <h1 className="mx-auto max-w-[1084px] px-3 text-center font-AvenirBold text-[34px] leading-[1.2em] lg:text-[50px] ">
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
