import Image from "next/image";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import MainLayout from "../../../layouts/Main";
import { sanityClient, urlFor } from "../../../sanity";
import { TypeCareer, TypeReference } from "../../../typing";
import { BottomToTopFramer, OpacityFramer, ScrollBottomToTop, TopToBottomFramer } from "../../../utils/framerAnimation";
import { useRouter } from "next/router";

export default function CareerSinglePage({ title, longDescription, category, type, level, skills, slug }: TypeCareer) {
    const { push } = useRouter();

    return (
        <MainLayout title={`Career - ${title}`} description={title}>
            <div className="bg-primary py-[27px] selection:bg-dark selection:text-white">
                <OpacityFramer>
                    <div className="mx-auto flex h-[403px] max-w-[1266px] items-center justify-center bg-[url('/images/reference-bg.svg')] bg-cover px-3 py-4">
                        <TopToBottomFramer>
                            <h1 className="text_line_img2 text-center font-[AvenirBold] text-[30px] leading-[50px] text-dark after:right-10 lg:text-[50px] lg:after:right-5">
                                {title}
                            </h1>
                            <div className="mt-10 flex items-center justify-center gap-4 overflow-y-scroll lg:overflow-hidden">
                                <mark className="whitespace-nowrap rounded-full bg-dark px-4 py-1 text-white">
                                    {category}
                                </mark>
                                <mark className="whitespace-nowrap rounded-full bg-dark px-4 py-1 text-white">
                                    {type}
                                </mark>
                                <mark className="whitespace-nowrap rounded-full bg-dark px-4 py-1 text-white">
                                    {level}
                                </mark>
                            </div>
                        </TopToBottomFramer>
                    </div>
                </OpacityFramer>
            </div>
            <div className="mx-auto mt-[100px] flex max-w-5xl flex-col gap-5 px-3 lg:flex-row lg:px-0">
                <div className="mx-auto max-w-3xl px-3 lg:px-0">
                    <ScrollBottomToTop>
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={longDescription}
                            serializers={{
                                h1: (props: any) => <h1 className="my-5 text-2xl font-bold" {...props} />,
                                h2: (props: any) => (
                                    <h2 className="mt-[50px] font-AvenirBold text-[34px] leading-10" {...props} />
                                ),
                                normal: (props: any) => <p className="mt-[30px] text-lg" {...props} />,
                                li: ({ children }: any) => <li className="ml-4 list-disc">{children}</li>,
                                blockquote: ({ children }: any) => (
                                    <blockquote className="border-l-primary-purple border-l-[6px] pl-4 text-xl">
                                        {children}
                                    </blockquote>
                                ),
                                link: ({ href, children }: any) => (
                                    <a href={href} className="text-blue-500 hover:underline">
                                        {children}
                                    </a>
                                ),
                            }}
                        />
                    </ScrollBottomToTop>
                    <ScrollBottomToTop>
                        <h2 className="mt-10 text-2xl">Skills:</h2>
                        <div className="mt-5 flex max-w-xs items-center gap-4 overflow-y-scroll lg:max-w-3xl lg:overflow-hidden">
                            {skills.map((skill, key) => (
                                <mark key={key} className="whitespace-nowrap rounded-full bg-dark px-4 py-1 text-white">
                                    {skill}
                                </mark>
                            ))}
                        </div>
                    </ScrollBottomToTop>
                </div>

                <button
                    onClick={() => push(`/career/${slug.current}/apply`)}
                    className="btn sticky top-36 mt-10 w-full"
                >
                    Apply Now
                </button>
            </div>
        </MainLayout>
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
        type,
        level,
        category,
        shortDescription,
        longDescription,
        skills
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
        revalidate: 15,
    };
};
