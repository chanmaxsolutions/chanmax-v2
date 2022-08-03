import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { OpacityFramer } from "../../utils/framerAnimation";

export default function PrevNextButton({ step, setStep }: any) {
    const handlePrev = () => setStep(step - 1);
    const handleNext = () => setStep(step + 1);

    if (step > 1 && step < 10) {
        return (
            <OpacityFramer>
                <div className="absolute right-5 bottom-5">
                    <button disabled={step <= 2} onClick={handlePrev} className="slideBtn rounded-l">
                        <HiChevronUp size={30} />
                    </button>
                    <button disabled={step >= 9} onClick={handleNext} className="slideBtn rounded-r">
                        <HiChevronDown size={30} />
                    </button>
                </div>
            </OpacityFramer>
        );
    } else {
        return null;
    }
}
