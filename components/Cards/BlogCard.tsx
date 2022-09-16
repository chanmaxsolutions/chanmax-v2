import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TypeBlogCard } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function BlogCard({ title, href, desc, img }: TypeBlogCard) {
    return (
        <ScrollBottomToTop>
            <Link href={href || "/"}>
                <a className="block rounded-[10px] bg-[#F8F8F8] px-[30px] pt-[47px] pb-[52px]">
                    <Image src={img} width={49} height={50} />
                    <h3 className="mt-5 font-AvenirBold text-2xl">{title}</h3>
                    <p className="mt-[17px] font-AvenirMedium text-lg leading-[1.2em]">{desc}</p>

                    <div className="mt-[35px] flex items-center gap-x-2 hover:underline">
                        <p className="font-AvenirDemi text-lg">Read More</p>
                        <HiOutlineArrowRight size={16} />
                    </div>
                </a>
            </Link>
        </ScrollBottomToTop>
    );
}
