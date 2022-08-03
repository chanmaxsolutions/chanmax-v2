import Image from "next/image";
import { HiOutlinePlus } from "react-icons/hi";
import { TypeWebAppTechCard } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function WebAppTechCard({ heading, img }: TypeWebAppTechCard) {
    return (
        <ScrollBottomToTop>
            <div className="rounded-[10px] bg-[#E7E8EA] p-[30px] lg:p-[30px]">
                <h3 className="mt-5 font-AvenirBold text-2xl">{heading}</h3>
                <Image src={img} width={270} height={180} />
                <div className="mt-[15px] flex items-center gap-x-2">
                    <p className="font-AvenirDemi text-lg">And More</p>
                    <HiOutlinePlus size={16} />
                </div>
            </div>
        </ScrollBottomToTop>
    );
}
