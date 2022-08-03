import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiCheck, FiCornerDownLeft } from "react-icons/fi";
import { HiArrowRight, HiExclamation } from "react-icons/hi";
import { TypeLeadForm } from "../../typing";
import { TopToBottomFramer } from "../../utils/framerAnimation";

export default function Slide3({ handleNext, quotation, setQuotation }: any) {
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
                            2 <HiArrowRight size={16} />
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                            <p>Great, thanks {quotation.Name || "___"}, and what's your email?</p>
                            <input
                                {...register("Email", {
                                    required: true,
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                                placeholder="EX: hello@chanmax.io"
                                className="mt-[35px] w-full border-b-2 border-b-gray-400 text-lg transition-colors duration-300 focus:border-b-dark focus:outline-none"
                            />

                            {errors.Email ? (
                                <p className="mt-4 flex w-fit items-center gap-x-1 bg-red-100 px-4 py-1 text-base text-red-800">
                                    <HiExclamation size={18} />
                                    {errors.Email?.type === "required" ? "This field is required" : "Invalid email"}
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
