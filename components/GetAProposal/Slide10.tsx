import { TopToBottomFramer } from "../../utils/framerAnimation";

export default function Slide10({ handleNext, quotation, setQuotation }: any) {
    return (
        <div className="flex h-full items-center justify-center text-center">
            <div className="mx-auto max-w-2xl">
                <TopToBottomFramer>
                    <h1 className="font-AvenirBold text-4xl">
                        {quotation.Name || "___"}, thanks for all the information
                    </h1>
                    <p className="mt-5 text-2xl">
                        We'll have a look at your given information and get in touch with you through WhatsApp or email.
                        Thanks again, and I'm looking forward to having a wonderful journey together.
                    </p>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
