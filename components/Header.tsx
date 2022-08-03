import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { Drawer, Popover } from "antd";
import { useWindowScroll } from "@mantine/hooks";
import { HiChevronDown, HiOutlineMenu, HiOutlineUserGroup, HiOutlineX } from "react-icons/hi";
import { AiOutlineLaptop, AiOutlineMobile } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { BiBrain, BiAtom } from "react-icons/bi";

const whatWeDoNavs = [
    {
        title: "Web Development",
        Icon: AiOutlineLaptop,
        href: "/what-we-do/web-development",
    },
    {
        title: "Mobile App Development",
        Icon: AiOutlineMobile,
        href: "/what-we-do/mobile-app-development",
    },
    {
        title: "UIUX Designing",
        Icon: BiBrain,
        href: "/what-we-do/uiux-designing",
    },
    {
        title: "Business Branding",
        Icon: IoDiamondOutline,
        href: "/what-we-do/business-branding",
    },
    {
        title: "Artificial Intelligence",
        Icon: BiAtom,
        href: "/what-we-do/artificial-intelligence",
    },
    {
        title: "Talent Outsourcing",
        Icon: HiOutlineUserGroup,
        href: "/what-we-do/talent-outsourcing",
    },
];

export default function Header() {
    const { pathname } = useRouter();

    const [scroll, _] = useWindowScroll();

    const [open, setOpen] = useState(false);
    const [mobiltToggle, setMobiltToggle] = useState(false);

    const toggleDrawer = () => setOpen(!open);

    const A = ({ href, children }: any) => (
        <Link {...{ href }}>
            <a onClick={() => setOpen(false)}>{children}</a>
        </Link>
    );

    useEffect(() => {
        setMobiltToggle(false);
    }, [pathname, open]);

    return (
        <>
            {pathname === "/" && (
                <div className="w-full bg-primary shadow-[0_1px_0px_#0000000F]">
                    <div className="mx-auto max-w-[1360px] px-3 py-3 text-center font-light text-dark">
                        Hello everyone. Thanks for landing on our website, and if you want to keep up with us. Follow us
                        on{" "}
                        <a
                            href="https://www.linkedin.com/company/chanmaxtech"
                            target="_blank"
                            className="font-AvenirBold"
                        >
                            LinkedIn.
                        </a>
                    </div>
                </div>
            )}

            <div className="header sticky top-0 z-50 bg-white px-3">
                <div className="mx-auto flex max-w-[1360px] items-center justify-between">
                    <A href="/">
                        {scroll.y > 50 ? (
                            <motion.div whileHover={{ scale: 0.95 }}>
                                <Image src="/favicon.svg" width={50} height={50} />
                            </motion.div>
                        ) : (
                            <Image src="/logo.svg" width={200} height={49.21} />
                        )}
                    </A>

                    <div className="hidden items-center gap-x-[30px] text-[15px] lg:flex">
                        <A href="/who-we-are">
                            <p className="font-AvenirDemi">Who We Are?</p>
                        </A>

                        <Popover
                            placement="bottom"
                            content={
                                <div className="p-y w-64 text-[15px]">
                                    {whatWeDoNavs.map(({ title, Icon, href }) => (
                                        <A href={href}>
                                            <p className="flex items-center gap-x-2 py-4 px-2 font-AvenirDemi hover:bg-gray-100">
                                                <Icon size={25} /> {title}
                                            </p>
                                        </A>
                                    ))}
                                </div>
                            }
                        >
                            <p className="group flex cursor-pointer items-center gap-x-1 font-AvenirDemi">
                                What We Do?{" "}
                                <HiChevronDown
                                    size={25}
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                />
                            </p>
                        </Popover>

                        <A href="/how-we-do-it">
                            <p className="font-AvenirDemi">How We Do It?</p>
                        </A>
                        <A href="/reference">
                            <p className="font-AvenirDemi">References</p>
                        </A>
                        <A href="/contact-us">
                            <p className="font-AvenirDemi">Contact Us</p>
                        </A>
                        <A href="#get-a-proposal">
                            <button className="btn h-10 text-[15px] font-semibold leading-none">Get a Proposal</button>
                        </A>
                    </div>

                    <HiOutlineMenu onClick={toggleDrawer} size={40} className="lg:hidden" />

                    <Drawer visible={open} onClose={toggleDrawer} width="100%" closable={false}>
                        <div className="flex items-center justify-between pb-7 shadow-[0_1px_0px_#0000000F]">
                            <A href="/">
                                <Image src="/logo.svg" width={202.79} height={45} />
                            </A>
                            <HiOutlineX onClick={toggleDrawer} size={40} />
                        </div>

                        <div className="flex flex-col text-center text-lg">
                            <A href="/who-we-are">
                                <p className="border-b py-4 font-AvenirDemi">Who We Are?</p>
                            </A>
                            <div>
                                <p
                                    onClick={() => setMobiltToggle(!mobiltToggle)}
                                    className="flex cursor-pointer items-center justify-center gap-x-2 border-b py-2 font-AvenirDemi"
                                >
                                    What We Do?{" "}
                                    <HiChevronDown
                                        size={25}
                                        className="transition-transform duration-300 group-hover:rotate-180"
                                    />
                                </p>
                                {mobiltToggle && (
                                    <div>
                                        {whatWeDoNavs.map(({ title, href }) => (
                                            <A href={href}>
                                                <p className="border-b py-4">{title}</p>
                                            </A>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <A href="/how-we-do-it">
                                <p className="border-b py-4 font-AvenirDemi">How We Do It?</p>
                            </A>
                            <A href="/reference">
                                <p className="border-b py-4 font-AvenirDemi">References</p>
                            </A>
                            <A href="/contact-us">
                                <p className="border-b py-4 font-AvenirDemi">Contact Us</p>
                            </A>
                            <A href="#get-a-proposal">
                                <button className="btn mt-4">Get a Proposal</button>
                            </A>
                        </div>
                    </Drawer>
                </div>
            </div>
        </>
    );
}
