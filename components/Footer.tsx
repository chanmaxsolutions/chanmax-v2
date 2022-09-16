import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-[75px] pt-[50px] shadow-[0px_-1px_0px_#00000029]">
            <div className="bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-y-6 px-3">
                    <div className="col-span-4 lg:col-span-1">
                        <h4 className="font-AvenirBold text-2xl">What We Do?</h4>
                        <div className="mt-5 flex flex-col space-y-[10px] text-base font-medium text-[#0F172A]">
                            <Link href="/what-we-do/web-development">
                                <a className="max-w-fit hover:underline">Web App Development</a>
                            </Link>
                            <Link href="/what-we-do/mobile-app-development">
                                <a className="max-w-fit hover:underline">Mobile App Development</a>
                            </Link>
                            <Link href="/what-we-do/uiux-designing">
                                <a className="max-w-fit hover:underline">UIUX Designing</a>
                            </Link>
                            <Link href="/what-we-do/business-branding">
                                <a className="max-w-fit hover:underline">Business Branding</a>
                            </Link>
                            <Link href="/what-we-do/artificial-intelligence">
                                <a className="max-w-fit hover:underline">Artificial Intelligence</a>
                            </Link>
                            <Link href="/what-we-do/talent-outsourcing">
                                <a className="max-w-fit hover:underline">Talent Outsourcing</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-1">
                        <h4 className="font-AvenirBold text-2xl">Other Pages</h4>
                        <div className="mt-5 flex flex-col space-y-[10px] text-base font-medium text-[#0F172A]">
                            <Link href="/who-we-are">
                                <a className="max-w-fit hover:underline">Who We Are?</a>
                            </Link>
                            <Link href="/how-we-do-it">
                                <a className="max-w-fit hover:underline">How We Do It?</a>
                            </Link>
                            <Link href="/reference">
                                <a className="max-w-fit hover:underline">References</a>
                            </Link>
                            <Link href="/contact-us">
                                <a className="max-w-fit hover:underline">Contact Us</a>
                            </Link>
                            <Link href="/career">
                                <a className="max-w-fit hover:underline">Career</a>
                            </Link>
                            <Link href="/privacy-policy">
                                <a className="max-w-fit hover:underline">Privacy Policy</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-1">
                        <h4 className="font-AvenirBold text-2xl">Our Products</h4>
                        <div className="mt-5 flex flex-col space-y-[10px] text-base font-medium text-[#0F172A]">
                            <a href="http://www.invoicer.club" target="_blank" className="max-w-fit hover:underline">
                                Invoicer Club
                            </a>
                            <Tooltip title="Coming soon">
                                <a className="max-w-fit hover:underline">Job Lister</a>
                            </Tooltip>
                            <Tooltip title="Coming soon">
                                <a className="max-w-fit hover:underline">Business Lister</a>
                            </Tooltip>
                            <Tooltip title="Coming soon">
                                <a className="max-w-fit hover:underline">Resume Builder</a>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-1">
                        <h4 className="mb-9 font-AvenirBold text-2xl">Follow Us</h4>
                        <Link href="/">
                            <a>
                                <Image src="/logo-dark.svg" width={200} height={49.21} />
                            </a>
                        </Link>
                        <div className="mt-[30px] flex items-center gap-x-[25.49px]">
                            <a
                                href="https://www.linkedin.com/company/chanmaxtech/"
                                target="_blank"
                                className="rounded-full p-2 hover:bg-primary"
                            >
                                <FaLinkedin size={30.51} />
                            </a>
                            <a
                                href="https://twitter.com/chanmaxtech"
                                target="_blank"
                                className="rounded-full p-2 hover:bg-primary"
                            >
                                <FaTwitter size={30.51} />
                            </a>
                            <a
                                href="https://www.instagram.com/chanmax.io/"
                                target="_blank"
                                className="rounded-full p-2 hover:bg-primary"
                            >
                                <FaInstagram size={30.51} />
                            </a>
                            <a
                                href="https://www.facebook.com/chanmaxtech"
                                target="_blank"
                                className="rounded-full p-2 hover:bg-primary"
                            >
                                <FaFacebookF size={30.51} />
                            </a>
                            <a
                                href="https://www.youtube.com/c/ChanmaxTech"
                                target="_blank"
                                className="rounded-full p-2 hover:bg-primary"
                            >
                                <FaYoutube size={30.51} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[90px] bg-dark">
                <div className="mx-auto max-w-[1140px] py-[41px] text-center font-medium text-white">
                    Chanmax Technologies PVT LTD © Copyright {new Date().getFullYear()}{" "}
                    <span className="hidden lg:inline">|</span>{" "}
                    <span className="block lg:inline">All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}
