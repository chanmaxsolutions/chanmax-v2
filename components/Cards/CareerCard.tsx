import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { TypeCareer } from "../../typing";

export default function CareerCard({ title, shortDescription, slug, type, level, category }: TypeCareer) {
    return (
        <Link href={`/career/${slug.current}`}>
            <a className="rounded-[10px] bg-[#F8F8F8]">
                <div className="p-[50px] pt-[30px]">
                    <h2 className="font-AvenirBold text-2xl">{title}</h2>
                    <div className="mt-5 flex items-center gap-4 overflow-y-scroll lg:overflow-hidden">
                        <mark className="rounded-full bg-primary px-4 py-1 text-dark whitespace-nowrap">{category}</mark>
                        <mark className="rounded-full bg-primary px-4 py-1 text-dark whitespace-nowrap">{type}</mark>
                        <mark className="rounded-full bg-primary px-4 py-1 text-dark whitespace-nowrap">{level}</mark>
                    </div>
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
