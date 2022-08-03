import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { urlFor } from "../../sanity";
import { TypeReference } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function BlogCard2({ coverImage, title, shortDescription, slug }: TypeReference) {
    return (
        <ScrollBottomToTop>
            <Link href={`/blog/${slug.current}`}>
                <a className="flex flex-col gap-[30px] rounded-[10px] bg-[#F8F8F8] md:flex-row">
                    <Image
                        src={urlFor(coverImage).url()}
                        width={300}
                        height={274}
                        className="rounded-[10px]"
                        objectFit="cover"
                    />
                    <div className="max-w-[400px] py-[30px] px-[30px] lg:px-0">
                        <h2 className="font-AvenirBold text-2xl">{title}</h2>
                        <p className="mt-[17px] text-lg">{shortDescription}</p>
                        <div className="mt-[35px] flex w-auto items-center gap-x-2 hover:underline">
                            <p className="font-AvenirDemi text-lg">Read More</p>
                            <HiOutlineArrowRight size={16} />
                        </div>
                    </div>
                </a>
            </Link>
        </ScrollBottomToTop>
    );
}
