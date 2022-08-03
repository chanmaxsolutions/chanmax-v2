import Image from "next/image";
import PortableText from "react-portable-text";
import MainLayout from "../../layouts/Main";
import { sanityClient, urlFor } from "../../sanity";
import { TypeReference } from "../../typing";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function BlogSinglePage({ title, mainImage, body }: TypeReference) {
    return (
        <MainLayout title={`Blog - ${title}`} description={`Blog - ${title}`} image={urlFor(mainImage).url()}>
            <div className="mx-auto mt-[100px] max-w-5xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <h1 className="mb-[50px] font-[AvenirBold] text-[30px] leading-[50px] lg:text-[50px]">{title}</h1>
                </ScrollBottomToTop>

                <ScrollBottomToTop>
                    <Image src={urlFor(mainImage).url()} width={1024} height={700} className="rounded-[10px]" />
                </ScrollBottomToTop>
                <div className="mx-auto max-w-3xl px-3 lg:px-0">
                    <ScrollBottomToTop>
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={body}
                            serializers={{
                                h1: (props: any) => <h1 className="my-5 text-2xl font-bold" {...props} />,
                                h2: (props: any) => <h2 className="mt-[50px] font-AvenirBold text-[34px]" {...props} />,
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
                                image: (props: any) => (
                                    <Image
                                        src={urlFor(props).url()}
                                        width={768}
                                        height={400}
                                        className="rounded-[10px]"
                                    />
                                ),
                            }}
                        />
                    </ScrollBottomToTop>
                </div>
            </div>
        </MainLayout>
    );
}

export const getStaticPaths = async () => {
    const query = `*[_type=="blog"]{
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
    const query = `*[_type == "blog" && slug.current == $slug][0]{
        _id,
        title,
        mainImage,
        body
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
