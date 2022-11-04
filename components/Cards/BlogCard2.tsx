import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { urlFor } from "../../sanity";
import { TypeReference } from "../../typing";

export default function BlogCard2({ coverImage, title, shortDescription, slug }: TypeReference) {
    return (
        <Link href={`/blog/${slug.current}`}>
            <a className="rounded-[10px] bg-neutral-100 hover:drop-shadow-lg">
                <Image src={urlFor(coverImage).url()} width={582} height={400} className="rounded-[10px] object-cover" />
                <div className="p-3 lg:p-[50px] pt-[30px]">
                    <h2 className="font-AvenirDemi text-2xl capitalize">{title}</h2>
                    <p className="mt-[17px] text-lg text-neutral-600">{shortDescription}</p>
                    <div className="mt-[35px] flex w-auto items-center gap-x-2 hover:underline">
                        <p className="font-AvenirDemi text-lg">Read More</p>
                        <HiOutlineArrowRight size={16} />
                    </div>
                </div>
            </a>
        </Link>
    );
}
