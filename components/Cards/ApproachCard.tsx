import Image from "next/image";
import { TypeApproachSection } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function ApproachCard(props: TypeApproachSection) {
    return (
        <div className="bg-white z-20 selection:bg-dark selection:text-white">
            <ScrollBottomToTop>
                <div
                    className="z-10 grid gap-12 rounded-[10px] p-[30px] lg:grid-cols-3"
                    style={{ background: props.bg }}
                >
                    <Image src={props.img} width={305.62} height={209.7} />
                    <div className="col-span-2">
                        <h2 className="font-AvenirBold text-[34px]">{props.heading}</h2>
                        <p className="mt-5 text-[30px] leading-[36px]">{props.para}</p>
                    </div>
                </div>
            </ScrollBottomToTop>
        </div>
    );
}
