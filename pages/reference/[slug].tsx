import Image from "next/image";
import PortableText from "react-portable-text";
import MainLayout from "../../layouts/Main";
import { sanityClient, urlFor } from "../../sanity";
import { TypeReference } from "../../typing";
import { BottomToTopFramer, OpacityFramer, ScrollBottomToTop, TopToBottomFramer } from "../../utils/framerAnimation";

export default function ReferenceSinglePage({
    title,
    mainImage,
    body,
    customerName,
    customerCountry,
    customerImage,
    customerFeedback,
}: TypeReference) {
    return (
        <MainLayout title={`Reference - ${title}`} description={title}>
            <div className="bg-primary py-[27px] selection:bg-dark selection:text-white">
                <OpacityFramer>
                    <div className="mx-auto flex h-[403px] max-w-[1266px] items-center justify-center bg-[url('/images/reference-bg.svg')] bg-cover px-3 py-4">
                        <TopToBottomFramer>
                            <h1 className="text_line_img2 text-center font-[AvenirBold] text-[30px] leading-[50px] after:right-10 lg:text-[50px] lg:after:right-5">
                                {title}
                            </h1>
                        </TopToBottomFramer>
                    </div>
                </OpacityFramer>
            </div>
            <div className="mx-auto mt-[100px] max-w-5xl px-3 lg:px-0">
                <BottomToTopFramer>
                    <Image src={urlFor(mainImage).url()} width={1024} height={700} />
                </BottomToTopFramer>

                <div className="mx-auto max-w-3xl px-3 lg:px-0">
                    <ScrollBottomToTop>
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={body}
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
                        <div className="mt-[50px] flex flex-col items-center gap-[30px] rounded-[10px] bg-[#F8F8F8] p-[30px] selection:bg-dark selection:text-white lg:flex-row">
                            <Image
                                src={urlFor(customerImage).url()}
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                            <div>
                                <p className="max-w-[628px] text-lg">{customerFeedback}</p>
                                <p className="mt-4 font-AvenirBold text-2xl">{customerName}</p>
                                <p className="font-AvenirDemi text-lg text-[#0066FF]">{customerCountry}</p>
                            </div>
                        </div>
                    </ScrollBottomToTop>
                </div>
            </div>
        </MainLayout>
    );
}

export const getStaticPaths = async () => {
    const query = `*[_type=="references"]{
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
    const query = `*[_type == "references" && slug.current == $slug][0]{
        _id,
        title,
        mainImage,
        body,
        customerName,
        customerImage,
        customerCountry,
        customerFeedback
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
