import { FiCornerDownLeft } from "react-icons/fi";
import { TopToBottomFramer } from "../../utils/framerAnimation";

export default function Slide6({ quotation, setQuotation, handleNext }: any) {
    return (
        <div className="flex h-full items-center justify-center text-center">
            <div className="mx-auto max-w-2xl">
                <TopToBottomFramer>
                    <h1 className="font-AvenirBold text-4xl after:bottom-2">
                        Thanks for your patience, {quotation.Name || "___"}.
                    </h1>
                    <p className="mt-5 text-2xl">
                        Thanks for sharing your personal information with us, and we'd like to know more about your
                        project now.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-x-1">
                        <button onClick={handleNext} className="btn scale-75">
                            Continue
                        </button>
                        <p className="hidden lg:flex items-center gap-x-1">
                            press <b>Enter</b>
                            <FiCornerDownLeft size={9} />
                        </p>
                    </div>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
