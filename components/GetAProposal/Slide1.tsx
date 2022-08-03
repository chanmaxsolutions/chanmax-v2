import { FiCornerDownLeft } from "react-icons/fi";
import { TopToBottomFramer } from "../../utils/framerAnimation";

export default function Slide1({ handleNext }: any) {
    return (
        <div className="flex h-full items-center justify-center text-center">
            <div className="mx-auto max-w-2xl">
                <TopToBottomFramer>
                    <h1 className="text_line_img font-AvenirBold text-[34px] after:-bottom-2 lg:text-[80px] lg:after:bottom-2">
                        Ready to Start?
                    </h1>
                    <p className="mt-10 text-2xl lg:mt-0">
                        Have a product idea? Do you want to digitize your business? Please answer our questions briefly.
                        We'll reply shortly.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-x-1">
                        <button onClick={handleNext} className="btn scale-75">
                            Get Started
                        </button>
                        <p className="hidden items-center gap-x-1 lg:flex">
                            press <b>Enter</b>
                            <FiCornerDownLeft size={9} />
                        </p>
                    </div>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
