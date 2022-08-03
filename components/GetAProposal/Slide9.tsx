import { useState } from "react";
import { union } from "lodash";
import { HiArrowRight, HiExclamation } from "react-icons/hi";
import { HoverScaleFramer, TopToBottomFramer } from "../../utils/framerAnimation";

const appTypes = [
    "Android App",
    "iOS App",
    "Admin Panel",
    "Payment Gateway",
    "Location Services",
    "SMS Services",
    "Third Party Integrations",
];

const romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII"];

export default function Slide9({ handleNext, quotation, setQuotation, setStep }: any) {
    const [error, setError] = useState(false);
    const [selectedApp, setSelectedApp] = useState<any>(quotation.Modules || []);

    const handleToggle = (app: any) => {
        setError(false);
        if (selectedApp.includes(app)) {
            const apps = selectedApp.filter((item: any) => item !== app);
            setSelectedApp(apps);
            setQuotation({ ...quotation, ["Modules"]: apps });
        } else {
            const apps = union(selectedApp, [app]);
            setSelectedApp(apps);
            setQuotation({ ...quotation, ["Modules"]: apps });
        }
    };

    const onSubmit = () => {
        if (selectedApp.length === 0) return setError(true);
        if (!quotation.Name) return setStep(2);
        if (!quotation.Email) return setStep(3);
        if (!quotation.Company) return setStep(4);
        if (!quotation.WhatsApp) return setStep(5);
        if (!quotation["Project Description"]) return setStep(7);
        if (quotation.Services?.length === 0) return setStep(8);

        fetch("/api/lead", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(quotation),
        })
            .then((res) => res.json())
            .then((res) => handleNext())
            .catch((err) => console.log(err));
    };

    return (
        <div className="mx-auto flex h-full max-w-2xl items-center">
            <div className="w-full">
                <TopToBottomFramer>
                    <div className="mt-[5vh] flex h-[70vh] gap-x-2 overflow-y-auto font-AvenirMedium text-2xl lg:text-4xl">
                        <p className="flex h-min items-center gap-x-2">
                            7 <HiArrowRight size={16} />
                        </p>
                        <div className="flex-1">
                            <p>
                                {quotation.Name || "___"}, What are the important modules that you need for this
                                project?
                            </p>

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
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
