import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../components/core/Input";
import Textarea from "../../../components/core/Textarea";
import MainLayout from "../../../layouts/Main";
import { sanityClient } from "../../../sanity";
import { TypeCareer } from "../../../typing";
import { OpacityFramer, TopToBottomFramer } from "../../../utils/framerAnimation";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const schema = yup.object().shape({
    "Applied Job": yup.string(),
    "Expertise Explains": yup.string().required("Please fill this field").max(2000, "Words limit is 2000"),
    "Why Chanmax?": yup.string().required("Please fill this field").max(2000, "Words limit is 2000"),
    "Other Link 2": yup.string().url("Please enter a valid URL"),
    "Other Link 1": yup.string().url("Please enter a valid URL"),
    LinkedIn: yup.string().url("Please enter a valid URL"),
    Name: yup.string().required("Please enter your name"),
    Email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    WhatsApp: yup.string().required("Please enter your whatsapp number"),
});

export default function ApplyCareer({ title, category, type, level }: TypeCareer) {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { asPath } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm({ resolver: yupResolver(schema) });

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) return "";

        await executeRecaptcha();
    }, []);

    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    const onSubmit = useCallback((data: any) => {
        if (!executeRecaptcha) return;
        executeRecaptcha().then((captcha) => {
            const submitData = { ...data, captcha };
            fetch("/api/career", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            })
                .then((res) => res.json())
                .catch((err) => console.log(err));
        });
    }, []);

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY || ""}>
            <MainLayout title={`Career - ${title}`} description={title}>
                <div className="bg-primary py-[27px] selection:bg-dark selection:text-white">
                    <OpacityFramer>
                        <div className="mx-auto flex h-[403px] max-w-[1266px] items-center justify-center bg-[url('/images/reference-bg.svg')] bg-cover px-3 py-4">
                            <TopToBottomFramer>
                                <h1 className="text_line_img2 text-center font-[AvenirBold] text-[30px] leading-[50px] text-dark after:right-10 lg:text-[50px] lg:after:right-5">
                                    {title}
                                </h1>
                                <div className="mt-10 flex items-center justify-center gap-4">
                                    <mark className="rounded-full bg-dark px-4 py-1 text-white">{category}</mark>
                                    <mark className="rounded-full bg-dark px-4 py-1 text-white">{type}</mark>
                                    <mark className="rounded-full bg-dark px-4 py-1 text-white">{level}</mark>
                                </div>
                            </TopToBottomFramer>
                        </div>
                    </OpacityFramer>
                </div>

                <div className="mx-auto mt-[100px] max-w-3xl px-3 lg:px-0">
                    {isSubmitSuccessful ? (
                        <h1 className="text_line_img my-24 text-center font-AvenirDemi text-2xl lg:text-6xl lg:after:right-[240px]">
                            Thanks for applied. We will get back to you as soon as possible.
                        </h1>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
                            <Input
                                {...register("Name")}
                                error={errors["Name"]}
                                label="Name"
                                placeholder="Type your name"
                            />
                            <Input
                                {...register("Email")}
                                error={errors["Email"]}
                                label="Email"
                                placeholder="Type your email"
                            />
                            <Input
                                {...register("WhatsApp")}
                                error={errors["WhatsApp"]}
                                label="WhatsApp Number"
                                placeholder="Type your WhatsApp number"
                            />
                            <Input
                                {...register("LinkedIn")}
                                error={errors["LinkedIn"]}
                                label="LinkedIn Profile"
                                placeholder="Enter your LinkedIn url"
                            />
                            <Input
                                {...register("Other Link 1")}
                                error={errors["Other Link 1"]}
                                label="Other Social Media / Links"
                                placeholder="Enter any related social media / links"
                            />
                            <Input
                                {...register("Other Link 2")}
                                error={errors["Other Link 2"]}
                                placeholder="Enter any related social media / links"
                            />
                            <Textarea
                                {...register("Why Chanmax?")}
                                error={errors["Why Chanmax?"]}
                                label="Why do you want to be a part of the Chanmax team?"
                                placeholder="Describe why you decided to join Chanmax, among many others, and what you expected to gain by doing so."
                            />
                            <Textarea
                                {...register("Expertise Explains")}
                                error={errors["Expertise Explains"]}
                                label="Write about your expertise and how you can assist with Chanmax's growth."
                                placeholder="Describe your expertise and the qualities that will help Chanmax's growth, and also mention your previous success stories, experiences, experiments, or failures and the learning you got from them."
                            />
                            <input
                                type="hidden"
                                {...register("Applied Job")}
                                value={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath.split("/apply")[0]}`}
                            />
                            <button className="btn">{isSubmitting ? "Please wait..." : "Apply Now"}</button>
                        </form>
                    )}
                </div>
            </MainLayout>
        </GoogleReCaptchaProvider>
    );
}

export const getStaticPaths = async () => {
    const query = `*[_type=="career"]{
		_id,
		slug {
            current
        }
    }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: any) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }: any) => {
    const query = `*[_type == "career" && slug.current == $slug][0]{
        _id,
      title,
      slug {
          current
      },
      category,
      type,
      level,
    }`;

    const data = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { ...data },
        revalidate: 300, // after 300 seconds updated the old cached version
    };
};
