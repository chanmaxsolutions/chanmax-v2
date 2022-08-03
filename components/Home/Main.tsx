import Image from "next/image";
import Link from "next/link";
import { ScrollBottomToTop } from "../../utils/framerAnimation";
import BlogCard from "../Cards/BlogCard";
import CustomersCard from "../Cards/CustomersCard";

export default function Main() {
    return (
        <div>
            <div className="mt-[143px] border-y py-[45px]">
                <ScrollBottomToTop>
                    <div className="mx-auto max-w-[1360px] overflow-x-scroll px-3 lg:overflow-hidden">
                        <div className="flex w-max items-center justify-center space-x-10 lg:w-full">
                            <div>
                                <Image src="/icons/brand1.svg" width={161.04} height={32.49} />
                            </div>
                            <div>
                                <Image src="/icons/brand2.svg" width={105.69} height={61.14} />
                            </div>
                            <div>
                                <Image src="/icons/brand3.svg" width={152.7} height={52.24} />
                            </div>
                            <div>
                                <Image src="/icons/brand4.png" width={216.28} height={59.97} />
                            </div>
                            <div>
                                <Image src="/icons/brand6.svg" width={205.26} height={64.44} />
                            </div>
                        </div>
                    </div>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto max-w-[1194px] px-3">
                <ScrollBottomToTop>
                    <h2 className="text_line_img mt-[142px] text-center font-AvenirBold text-[34px] leading-[40px]">
                        Values that drive us Towards Success.
                    </h2>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-2xl">
                        Our everyday decisions are guided by a set of core rules.
                    </p>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <div className="mt-[50px] grid gap-[30px] px-3 lg:grid-cols-3">
                        <div className="rounded-[10px] bg-[#F8F8F8] px-[30px] pt-[47px] pb-[52px]">
                            <Image src="/icons/heart1.svg" width={49} height={50} />
                            <h3 className="mt-5 font-AvenirBold text-2xl">Integrity and Honesty</h3>
                            <p className="mt-[17px] font-AvenirMedium text-lg leading-[21px]">
                                We have the bravery to evolve and the honesty and integrity to confess when we are
                                wrong.
                            </p>
                        </div>

                        <div className="rounded-[10px] bg-[#F8F8F8] px-[30px] pt-[47px] pb-[52px]">
                            <Image src="/icons/heart2.svg" width={49} height={50} />
                            <h3 className="mt-5 font-AvenirBold text-2xl">Work with Passion</h3>
                            <p className="mt-[17px] font-AvenirMedium text-lg leading-[21px]">
                                We are committed to any endeavor with both our hearts and minds. Never execute a task
                                half-heartedly.
                            </p>
                        </div>

                        <div className="rounded-[10px] bg-[#F8F8F8] px-[30px] pt-[47px] pb-[52px]">
                            <Image src="/icons/heart3.svg" width={49} height={50} />
                            <h3 className="mt-5 font-AvenirBold text-2xl">Customer Centric</h3>
                            <p className="mt-[17px] font-AvenirMedium text-lg leading-[21px]">
                                Our customers motivate us to achieve greatness. We work hard to exceed their
                                expectations.
                            </p>
                        </div>
                    </div>
                </ScrollBottomToTop>
            </div>

            <div className="mt-[100px] w-full bg-[#FFD000] py-[109px] text-center selection:bg-dark selection:text-white px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h1 className="mx-auto max-w-5xl px-3 text-center font-AvenirBold text-[34px] leading-[40px] lg:text-[50px] lg:leading-[60px]">
                        We have Successfully Delivered 30+ Projects for Clients from 8+ Countries in the last year.
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <Link href="/reference">
                        <a>
                            <button className="btn-red mt-[54px] h-auto text-[28px] lg:h-[62px]">
                                Look at Our Case Studies
                            </button>
                        </a>
                    </Link>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto max-w-[1194px] px-3">
                <ScrollBottomToTop>
                    <h1 className="text_line_img mt-[100px] text-center font-AvenirBold text-[34px] leading-[40px]">
                        Services that add Value to your Business.
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[30px] text-center text-2xl">
                        We have everything you need, from app development to expanding your business.
                    </p>
                </ScrollBottomToTop>

                <div className="mt-14 grid gap-[30px] px-3 lg:grid-cols-3 lg:px-0">
                    <BlogCard
                        img="/icons/blog1.svg"
                        title="Web App Development"
                        href="/what-we-do/web-development"
                        desc="Explore new horizons in the digital world with custom web applications that give you a leg up."
                    />
                    <BlogCard
                        img="/icons/blog2.svg"
                        title="Mobile App Development"
                        href="/what-we-do/mobile-app-development"
                        desc="World-class, agile solutions that convert your digital heritage via all mobile platforms."
                    />
                    <BlogCard
                        img="/icons/blog3.svg"
                        title="UIUX Designing"
                        href="/what-we-do/uiux-designing"
                        desc="Using critical design thinking to create user-friendly, human-centered products that
						captivate the market."
                    />
                    <BlogCard
                        img="/icons/blog4.svg"
                        title="Business Branding"
                        href="/what-we-do/business-branding"
                        desc="Set yourself out from the competition by establishing your leadership brand and certifying
						your legacy."
                    />
                    <BlogCard
                        img="/icons/blog5.svg"
                        title="Artificial Intelligence"
                        href="/what-we-do/artificial-intelligence"
                        desc="Let's have a look at how Artificial Intelligence can be used to tackle a wide range of
						problems."
                    />
                    <BlogCard
                        img="/icons/blog6.svg"
                        title="Talent Outsourcing"
                        href="/what-we-do/talent-outsourcing"
                        desc="Remote teams to assist innovators broaden their vision and speed up their business operations."
                    />
                </div>
            </div>

            <div className="mt-[100px] w-full rounded-[10px] bg-[#FFD000] py-[109px] text-center selection:bg-dark selection:text-white">
                <ScrollBottomToTop>
                    <h1 className="mx-auto max-w-5xl px-3 text-center font-AvenirBold text-[34px] leading-[40px] lg:text-[50px] lg:leading-[60px]">
                        A Diligent Team bonded on an aligned Vision for Change and Innovation
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mx-auto mt-[15px] max-w-[813px] text-center text-2xl">
                        We are a committed team of tech masters working around the clock to give you the best solution
                        possible.
                    </p>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <Link href="/who-we-are">
                        <a>
                            <button className="btn-red mt-[54px] text-[28px]">Know More</button>
                        </a>
                    </Link>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto mt-[100px] max-w-7xl px-3">
                <ScrollBottomToTop>
                    <h1 className="text_line_img text-center font-AvenirBold text-[34px] leading-[40px]">
                        Curious to know what our Customers say?
                    </h1>
                </ScrollBottomToTop>
                <ScrollBottomToTop>
                    <p className="mt-[23px] text-center text-[24px] leading-[30px]">
                        Listen to what our happy clients have to say and a promise of what is to come
                    </p>
                </ScrollBottomToTop>

                <div className="mt-[50px] flex gap-6 overflow-x-scroll xl:grid xl:grid-cols-4 xl:overflow-hidden">
                    <div className="flex gap-6 xl:flex-col">
                        <CustomersCard
                            author="Myu Guna"
                            position="Owner of Mgunz"
                            desc="I recently used Chanmax to create my website as part of my rebrand in the business model. These guys were friendly and went above and beyond to ensure my vision was met. I cannot recommend them enough for your next project."
                        />
                        <CustomersCard
                            author="Sajeev Punithakaran"
                            position="Co-founder of Ai 4 Life"
                            desc="First of all, I would like to thank them for the excellent logo they created for us. It has been designed very neatly than we expected. They put their maximum effort into creating the logo according to our needs. Also, we frequently receive positive comments from lots of people who look at our logo."
                        />
                        <CustomersCard
                            author="Jathujan Mahendran"
                            position="Co-founder of Ai 4 Life"
                            desc="We recently worked with Chanmax on a logo design project for our startup AI 4 LIFE, and their designs were amazing. It fulfilled our expectations."
                        />
                    </div>
                    <div className="flex gap-6 xl:flex-col">
                        <CustomersCard
                            author="Seran"
                            position="Co-founder of Ovamee Pvt Ltd"
                            desc="It was smooth and transparent. The responses we got from these folks ease us to create better outcomes. Good with communication."
                        />
                        <CustomersCard
                            author="Nadarajah Selvarajah"
                            position="Founder Secretary of Noolthettam"
                            desc="I wanted to digitize all of my books and book collections but didn't know how, so I contacted Chanmax, who quickly grasped my requirements and suggested an appropriate solution, as well as building a platform for me. The service was user-friendly. They come highly recommended by me."
                        />
                        <CustomersCard
                            author="Anchale Ayngaranesan"
                            position="Founder of For You With Love"
                            desc="Prashan is very driven to provide the best kind of service. He not only does his job perfectly but also makes sure you are driven constantly to work towards your project. The patience and outcome are explicit making working with Chanmax a profitable and peaceful experience."
                        />
                    </div>
                    <div className="flex gap-6 xl:flex-col">
                        <CustomersCard
                            author="Sajeevkanth Patricks"
                            position="Founder of Quize SL"
                            desc="I was seeking an affordable software company to help me expand my YouTube business with a new product, and I came across Chanmax, who have been very helpful in growing my business. Since my business is performing so well, I'm expecting to expand it, and I'll be working with Chanmax once again."
                        />
                        <CustomersCard
                            author="Jesurasa Amirtharaj"
                            position="Director of Hdo"
                            desc="We have been working with Chanmax since 2019 to up to now, and we are satisfied with their services. We highly recommend choosing them for your next project."
                        />
                        <CustomersCard
                            author="Sujan Selven"
                            position="Director of Space Comms & Civil"
                            desc="I've been working with Chanmax on various projects for several years, and they've done some incredible work for me. I loved working with Chanmax since they have both creative UX designers and talented coders."
                        />
                    </div>
                    <div className="flex gap-6 xl:flex-col">
                        <CustomersCard
                            author="Kevin J"
                            position="Director of Symbioun"
                            desc="I am happy that I chose Chanmax as a preferred partner for our Logo and branding requirements. The quality of work and promptness is exceptional. I am happy to recommend them as a one stop shop for all web, mobile app & UI/UX work."
                        />
                        <CustomersCard
                            author="Premalooks K"
                            position="Sales Executive at Rhino Roofing"
                            desc="They grasped my demand and gave a perfect solution when I recently worked with them on a design-related job. I am pleased with the results and look forward to collaborating with them on future projects."
                        />
                    </div>
                </div>
            </div>

            <ScrollBottomToTop>
                <div className="mx-auto mt-[100px] max-w-7xl rounded-[10px] bg-[#FFD000] px-3 selection:bg-dark selection:text-white">
                    <div className="w-full rounded-[10px] py-[109px] text-center">
                        <h1 className="mx-auto max-w-5xl px-3 text-center font-AvenirBold text-[34px] leading-[40px] lg:text-[50px] lg:leading-[60px]">
                            Looking for a Passionate Team to Build your Idea? You've Found it.
                        </h1>
                        <Link href={{ hash: "get-a-proposal" }}>
                            <button className="btn-red mt-[54px] text-[28px]">Get a Proposal</button>
                        </Link>
                    </div>
                </div>
            </ScrollBottomToTop>
        </div>
    );
}
