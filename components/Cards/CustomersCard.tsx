import { TypeCustomerCard } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function CustomersCard({ author, desc, position }: TypeCustomerCard) {
    return (
        <ScrollBottomToTop>
            <div className="w-[304px] rounded-[10px] border border-[#08080817] bg-[#FFFFFFF7] py-[52px] px-6 xl:w-full">
                <p className="font-AvenirMedium text-lg leading-[1.2em]">{desc}</p>
                <p className="mt-[30px] font-AvenirDemi text-lg">{author}</p>
                <p className="font-AvenirDemi text-sm text-[#0066FF]">{position}</p>
            </div>
        </ScrollBottomToTop>
    );
}
