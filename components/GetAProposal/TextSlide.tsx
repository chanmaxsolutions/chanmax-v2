import { FiCornerDownLeft } from "react-icons/fi";
import { TopToBottomFramer } from "../../utils/framerAnimation";

export default function TextSlide({ handleNext }: any) {
    return (
        <div className="flex h-full items-center justify-center text-center">
            <div className="mx-auto max-w-2xl">
                <TopToBottomFramer>
                    <h1 className="font-AvenirBold text-[30px] lg:text-[80px]">Ready to start?</h1>
                    <p className="text-2xl">
                        Have a product idea? Do you want to digitize your business? Please answer our questions briefly.
                        We'll reply shortly.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-x-1">
                        <button onClick={handleNext} className="btn scale-75">
                            Get Started
                        </button>
                        <p className="flex items-center gap-x-1">
                            press <b>Enter</b>
                            <FiCornerDownLeft size={9} />
                        </p>
                    </div>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
