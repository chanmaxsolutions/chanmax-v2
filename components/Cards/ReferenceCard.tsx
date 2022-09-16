import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { urlFor } from "../../sanity";
import { TypeReference } from "../../typing";

export default function ReferenceCard({ coverImage, title, shortDescription, slug }: TypeReference) {
    return (
        <Link href={`/reference/${slug.current}`}>
            <a className="rounded-[10px] bg-[#F8F8F8]">
                <Image src={urlFor(coverImage).url()} width={582} height={300} className="rounded-[10px]" />
                <div className="p-[50px] pt-[30px]">
                    <h2 className="font-AvenirBold text-2xl">{title}</h2>
                    <p className="mt-[17px] text-lg">{shortDescription}</p>
                    <div className="mt-[35px] flex w-auto items-center gap-x-2 hover:underline">
                        <p className="font-AvenirDemi text-lg">Read More</p>
                        <HiOutlineArrowRight size={16} />
                    </div>
                </div>
            </a>
        </Link>
    );
}
