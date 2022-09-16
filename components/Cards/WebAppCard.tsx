import Image from "next/image";
import { TypeBlogCard } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function WebAppCard({ title, desc, img }: TypeBlogCard) {
    return (
        <div className="bg-white px-[30px] pt-[47px] pb-[52px]">
            <ScrollBottomToTop>
                <Image src={img} width={60} height={68} />
                <h3 className="mt-5 font-AvenirBold text-2xl lg:max-w-[200px]">{title}</h3>
                <p className="mt-[17px] font-AvenirMedium text-lg leading-[1.2em]">{desc}</p>
            </ScrollBottomToTop>
        </div>
    );
}
