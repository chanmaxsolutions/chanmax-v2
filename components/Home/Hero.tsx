import Image from "next/image";
import Link from "next/link";
import { ClutchBadge } from "react-clutch-badge";
import { BottomToTopFramer, OpacityFramer, TopToBottomFramer } from "../../utils/framerAnimation";

export default function Hero() {
    return (
        <div className="mx-auto mt-[100px] flex max-w-[1360px] items-center px-3 lg:px-0">
            <div className="flex-grow">
                <TopToBottomFramer>
                    <div className="text_line_img ml-0 text-center font-[AvenirBold] text-[38px] leading-[50px] lg:max-w-[520px] lg:text-left lg:text-[50px] lg:leading-[60px]">
                        Helps Businesses Build Futuristic Apps.
                    </div>
                </TopToBottomFramer>

                <OpacityFramer>
                    <p className="mt-10 text-center text-2xl leading-[29px] lg:max-w-[550px] lg:text-left">
                        We build future-proof applications that make you stand out as the best option on the market.
                    </p>
                </OpacityFramer>

                <BottomToTopFramer>
                    <div className="mt-[30px] grid items-center gap-[15px] lg:grid-cols-2">
                        <Link href={{ hash: "get-a-proposal" }}>
                            <button className="btn w-full">Get a Proposal</button>
                        </Link>
                        <a href="https://clutch.co/profile/chanmax" target="_blank">
                            <ClutchBadge
                                classNamePrefix="custom-small-clutch-badge"
                                starsCount={5}
                                reviewsCount={4}
                                variant={"bigLogo"}
                            />
                        </a>
                    </div>
                </BottomToTopFramer>
            </div>

            <div className="hidden lg:block">
                <OpacityFramer>
                    <Image src="/icons/map.png" width={787.29} height={519.01} />
                </OpacityFramer>
            </div>
        </div>
    );
}
