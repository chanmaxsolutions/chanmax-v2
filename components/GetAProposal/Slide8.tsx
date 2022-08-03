import { useState } from "react";
import { union } from "lodash";
import { FiCheck, FiCornerDownLeft } from "react-icons/fi";
import { HiArrowRight, HiExclamation } from "react-icons/hi";
import { HoverScaleFramer, TopToBottomFramer } from "../../utils/framerAnimation";

const appTypes = [
    "Web App Development",
    "Mobile App Development",
    "UI/UX Designing",
    "Business Branding",
    "Artificial Intelligence",
    "Remote Teams",
];

const romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function Slide8({ handleNext, quotation, setQuotation }: any) {
    const [error, setError] = useState(false);
    const [selectedApp, setSelectedApp] = useState<any>(quotation.Services || []);

    const handleToggle = (app: any) => {
        setError(false);
        if (selectedApp.includes(app)) {
            const apps = selectedApp.filter((item: any) => item !== app);
            setSelectedApp(apps);
            setQuotation({ ...quotation, ["Services"]: apps });
        } else {
            const apps = union(selectedApp, [app]);
            setSelectedApp(union(apps));
            setQuotation({ ...quotation, ["Services"]: apps });
        }
    };

    const onSubmit = () => {
        if (selectedApp.length === 0) {
            setError(true);
        } else {
            handleNext();
        }
    };

    return (
        <div className="mx-auto flex h-full max-w-2xl items-center">
            <div className="w-full">
                <TopToBottomFramer>
                    <div className="mt-[5vh] flex h-[70vh] gap-x-2 overflow-y-scroll font-AvenirMedium text-2xl lg:mt-0 lg:h-full lg:overflow-y-hidden lg:text-4xl">
                        <p className="flex h-min items-center gap-x-2">
                            6 <HiArrowRight size={16} />
                        </p>
                        <div className="flex-1">
                            <p>{quotation.Name || "___"}, what services do you want from us for this project?</p>

                            <div className="mt-5 max-w-xs">
                                <p className="mt-5 text-left text-sm">Choose as many as you need</p>
                                {appTypes.map((type, index) => (
                                    <HoverScaleFramer key={index}>
                                        <div
                                            onClick={() => handleToggle(type)}
                                            className="mt-2 flex cursor-pointer items-center gap-x-2 rounded-md border border-dark py-2 pl-4 text-left text-lg"
                                        >
                                            <div
                                                className="w-8 rounded-md border p-1 text-center font-AvenirDemi text-base text-dark"
                                                style={{
                                                    background: selectedApp.includes(type) ? "#FFD000" : "white",
                                                }}
                                            >
                                                {romanNumbers[index]}
                                            </div>
                                            <p>{type}</p>
                                        </div>
                                    </HoverScaleFramer>
                                ))}
                            </div>
                            {error ? (
                                <p className="mt-4 flex w-fit items-center gap-x-1 bg-red-100 px-4 py-1 text-base text-red-800">
                                    <HiExclamation size={18} />
                                    Please choose at least one service
                                </p>
                            ) : (
                                <div className="mt-5 flex items-center justify-start gap-x-5">
                                    <button
                                        onClick={onSubmit}
                                        className="btn flex h-auto items-center gap-x-2 px-4 py-2 text-xl"
                                    >
                                        OK
                                        <FiCheck size={20} />
                                    </button>
                                    <p className="hidden items-center gap-x-1 text-sm lg:flex">
                                        press <b>Enter</b>
                                        <FiCornerDownLeft size={9} />
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
