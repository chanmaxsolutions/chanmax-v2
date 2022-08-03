import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiCheck, FiCornerDownLeft } from "react-icons/fi";
import { HiArrowRight, HiExclamation } from "react-icons/hi";
import { TypeLeadForm } from "../../typing";
import { TopToBottomFramer } from "../../utils/framerAnimation";

export default function Slide7({ handleNext, quotation, setQuotation }: any) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TypeLeadForm>();

    useEffect(() => {
        reset(quotation);
    }, []);

    const onSubmit = (data: any) => {
        setQuotation({ ...quotation, ...data });
        handleNext();
    };

    return (
        <div className="mx-auto flex h-full max-w-2xl items-center">
            <div className="w-full">
                <TopToBottomFramer>
                    <div className="flex gap-x-2 font-AvenirMedium text-2xl lg:text-4xl">
                        <p className="flex h-min items-center gap-x-2">
                            5 <HiArrowRight size={16} />
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                            <p>{quotation.Name || "___"}, pitch your project in a few lines</p>
                            <textarea
                                {...register("Project Description", { required: true })}
                                rows={5}
                                placeholder="EX: I want to build an OTT platform like Netflix for a specific niche audience where people can watch movies and series. The platform will provide a limited service for free, but customers will have to pay for premium movies and series"
                                className="mt-[35px] w-full border-b-2 border-b-gray-400 text-lg transition-colors duration-300 focus:border-b-dark focus:outline-none"
                            />

                            {errors["Project Description"] ? (
                                <p className="mt-4 flex w-fit items-center gap-x-1 bg-red-100 px-4 py-1 text-base text-red-800">
                                    <HiExclamation size={18} />
                                    This field is required
                                </p>
                            ) : (
                                <div className="mt-5 flex items-center justify-start gap-x-5">
                                    <button className="btn flex h-auto items-center gap-x-2 px-4 py-2 text-xl">
                                        OK
                                        <FiCheck size={20} />
                                    </button>
                                    <p className="hidden items-center gap-x-1 text-sm lg:flex">
                                        press <b>Enter</b>
                                        <FiCornerDownLeft size={9} />
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </TopToBottomFramer>
            </div>
        </div>
    );
}
