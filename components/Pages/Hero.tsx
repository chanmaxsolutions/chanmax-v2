import Image from "next/image";
import Link from "next/link";

import { TypeHeroSection } from "../../typing";
import { BottomToTopFramer, OpacityFramer, TopToBottomFramer } from "../../utils/framerAnimation";

export default function Hero(props: TypeHeroSection) {
    return (
        <div className="bg-primary selection:bg-dark selection:text-white">
            <div className="gap-x-[120px mx-auto flex max-w-[1360px] items-center px-3 py-4">
                <div className="flex-grow">
                    <TopToBottomFramer>
                        <div className="text_line_img2 ml-0 text-center font-[AvenirBold] text-[30px] leading-[40px] after:right-10 lg:max-w-[680px] lg:text-left lg:text-[40px] lg:leading-[60px] lg:after:right-36">
                            {props.heading}
                        </div>
                    </TopToBottomFramer>
                    <OpacityFramer>
                        <p className="mt-10 text-center text-2xl leading-[29px] lg:max-w-[599px] lg:text-left">
                            {props.para}
                        </p>
                    </OpacityFramer>
                    {props.btn && (
                        <BottomToTopFramer>
                            <Link href={props.href || "/"}>
                                <a className="mt-[30px] grid items-center gap-[15px] lg:grid-cols-2">
                                    <button className="btn-red w-full">{props.btn}</button>
                                </a>
                            </Link>
                        </BottomToTopFramer>
                    )}
                </div>
                <div className="hidden w-[441.62px] lg:block">
                    <OpacityFramer>
                        <Image src={props.img} width={441.62} height={416.7} />
                    </OpacityFramer>
                </div>
            </div>
        </div>
    );
}
