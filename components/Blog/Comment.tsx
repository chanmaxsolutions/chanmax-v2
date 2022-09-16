import { useForm } from "react-hook-form";
import Input from "../core/Input";
import Textarea from "../core/Textarea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, message } from "antd";
import { useState } from "react";
import { format } from "timeago.js";
import { OpacityFramer } from "../../utils/framerAnimation";

type Comment = {
    _id: string;
    name?: string;
    email?: string;
    comment?: string;
};

const schema = yup.object().shape({
    _id: yup.string(),
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    comment: yup.string().required("Please fill this field").max(2000, "Words limit is 2000"),
});

export default function Comment({ _id, comments }: any) {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Comment>({ resolver: yupResolver(schema) });

    const onSubmit = async (data: Comment) => {
        fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(() => {
                setSubmitted(true);
            })
            .catch((err) => {
                message.error("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="mt-20">
            {submitted ? (
                <OpacityFramer>
                    <div className="mt-20 text-center text-2xl font-bold">Thank you for submitting your comment</div>
                    <p className="text-center">Once, It has been approved, it will appear below</p>
                </OpacityFramer>
            ) : (
                <div>
                    <h1 className="my-5 font-AvenirBold text-[34px]">Submit a comment</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("_id")} type="hidden" name="_id" value={_id} />
                        <Input label="Name" {...register("name")} error={errors.name} />
                        <Input label="Email" {...register("email")} error={errors.email} />
                        <Textarea label="Comment" {...register("comment")} error={errors.comment} />
                        <button className="btn mt-5">Comment</button>
                    </form>
                </div>
            )}

            <h1 className="mt-20 font-AvenirBold text-[34px]">Comments</h1>
            <div className="mt-5">
                {comments?.map((comment: any) => (
                    <div className="mt-5 flex space-x-2">
                        <Avatar>{comment.name?.charAt(0)}</Avatar>
                        <div>
                            <h4 className="font-bold">
                                {comment?.name}{" "}
                                <span className="ml-4 text-gray-500">{format(comment?._createdAt)}</span>
                            </h4>
                            <p>{comment?.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
