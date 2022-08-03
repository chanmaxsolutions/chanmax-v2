import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PrevNextButton from "./PrevNextButton";
import Slide1 from "./Slide1";
import Slide10 from "./Slide10";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";

export default function Form() {
    const { asPath } = useRouter();
    const [step, setStep] = useState(1);
    const [quotation, setQuotation] = useState({});

    useEffect(() => {
        setStep(1);
        setQuotation({});
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                setStep(step + 1);
            }
        });
    }, [asPath]);

    const handleNext = () => setStep(step + 1);

    return (
        <div className="relative h-full">
            {step === 1 && <Slide1 {...{ handleNext }} />}
            {step === 2 && <Slide2 {...{ handleNext, quotation, setQuotation }} />}
            {step === 3 && <Slide3 {...{ handleNext, quotation, setQuotation }} />}
            {step === 4 && <Slide4 {...{ handleNext, quotation, setQuotation }} />}
            {step === 5 && <Slide5 {...{ handleNext, quotation, setQuotation }} />}
            {step === 6 && <Slide6 {...{ handleNext, quotation, setQuotation }} />}
            {step === 7 && <Slide7 {...{ handleNext, quotation, setQuotation }} />}
            {step === 8 && <Slide8 {...{ handleNext, quotation, setQuotation }} />}
            {step === 9 && <Slide9 {...{ handleNext, quotation, setQuotation, setStep }} />}
            {step === 10 && <Slide10 {...{ handleNext, quotation, setQuotation }} />}

            <PrevNextButton {...{ step, setStep }} />
        </div>
    );
}
