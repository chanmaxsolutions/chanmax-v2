import Image from "next/image";
import PortableText from "react-portable-text";
import BlogShare from "../../components/Blog/BlogShare";
import Comment from "../../components/Blog/Comment";
import MainLayout from "../../layouts/Main";
import { sanityClient, urlFor } from "../../sanity";
import { TypeBlog } from "../../typing";
import { OpacityFramer, ScrollBottomToTop, TopToBottomFramer } from "../../utils/framerAnimation";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function BlogSinglePage({ _id, title, mainImage, body, blogCategory, blogAuthor, comments }: TypeBlog) {
    return (
        <MainLayout title={`Blog - ${title}`} description={`Blog - ${title}`}>
            <div className=" lg:py-10 selection:bg-dark selection:text-white">
                <OpacityFramer>
                    <div className="mx-auto bg-neutral-100 rounded-0 lg:rounded-[10px] flex max-w-4xl items-center justify-center bg-cover px-3 py-4 bg-red">
                        <TopToBottomFramer>
                            <div className="flex items-center  gap-4 overflow-y-scroll lg:overflow-hidden ">
                                {blogCategory?.map((cat: any) => (
                                    <mark className="whitespace-nowrap rounded-full bg-[#ffd00050] px-4 py-1 ">
                                        {cat?.name}
                                    </mark>
                                ))}
                            </div>

                            <h1 className="mt-5 font-[Avenirdemi] text-[30px] leading-[1.2em] lg:text-[40px] capitalize">
                                {title}
                            </h1>

                            {blogAuthor && (
                                <div className="mt-5 flex items-center space-y-3">
                                    <Image
                                        src={urlFor(blogAuthor?.avatar).url()}
                                        width={75}
                                        height={75}
                                        className="rounded-full"
                                    />
                                    <div className="ml-3">
                                        
                                    <p className="text-[24px] font-bold">{blogAuthor?.fullName}</p>
                                        <p className="text-[16px] font-bold text-neutral-500">{blogAuthor?.jobTitle}</p>
                                    </div>
                                </div>
                            )}
                        </TopToBottomFramer>
                    </div>
                </OpacityFramer>
            </div>

            <div className="mx-auto  max-w-4xl px-3 lg:px-0">
                <ScrollBottomToTop>
                    <div className="">
                        <Image src={urlFor(mainImage).url()} width={1024} height={620} className="rounded-[10px] object-cover" />
                    </div>
                </ScrollBottomToTop>
                <div className="mx-auto max-w-3xl px-3 lg:px-0">
                    <ScrollBottomToTop>
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={body}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className="my-5 text-2xl font-bold leading-[1.2em]" {...props} />
                                ),
                                h2: (props: any) => (
                                    <h2 className="mt-[50px] font-[Avenirdemi] capitalize text-[20px] " {...props} />
                                ),
                                normal: (props: any) => <p className="mt-[10px] text-lg leading-[1.7em] text-neutral-600" {...props} />,
                                li: ({ children }: any) => (
                                    <li className="ml-4 list-disc leading-[1.2em]">{children}</li>
                                ),
                                blockquote: ({ children }: any) => (
                                    <blockquote className="border-l-primary-purple border-l-[6px] pl-4 text-xl leading-[1.2em]">
                                        {children}
                                    </blockquote>
                                ),
                                link: ({ href, children }: any) => (
                                    <a href={href} className="leading-[1.2em] text-blue-500 hover:underline">
                                        {children}
                                    </a>
                                ),
                                image: (props: any) => (
                                    <Image
                                        src={urlFor(props).url()}
                                        width={768}
                                        height={400}
                                        className="rounded-[10px] object-cover"
                                    />
                                ),
                            }}
                        />

                        {blogAuthor && (
                            <div>
                                <div className="mt-20 flex items-center space-x-3">
                                    <Image
                                        src={urlFor(blogAuthor?.avatar).url()}
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-[AvenirBold] text-[20px]">{blogAuthor?.fullName}</h3>
                                        <p className="text-lg font-bold text-gray-500">{blogAuthor?.jobTitle}</p>
                                        <div className="mt-1 flex items-center gap-x-2">
                                            {blogAuthor.linkedin && (
                                                <a
                                                    href={blogAuthor.linkedin}
                                                    target="_blank"
                                                    className="rounded-full p-2 hover:bg-primary"
                                                >
                                                    <FaLinkedin size={22} />
                                                </a>
                                            )}
                                            {blogAuthor.instagram && (
                                                <a
                                                    href={blogAuthor.instagram}
                                                    target="_blank"
                                                    className="rounded-full p-2 hover:bg-primary"
                                                >
                                                    <FaInstagram size={22} />
                                                </a>
                                            )}
                                            {blogAuthor.facebook && (
                                                <a
                                                    href={blogAuthor.facebook}
                                                    target="_blank"
                                                    className="rounded-full p-2 hover:bg-primary"
                                                >
                                                    <FaFacebookF size={22} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-5 text-lg font-bold text-gray-500">{blogAuthor?.description}</p>
                            </div>
                        )}
                    </ScrollBottomToTop>

                    <BlogShare />

                    <Comment _id={_id} comments={comments} />
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
        },
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
        blogCategory[] -> {
            name
        },
        blogAuthor -> {
            fullName,
            avatar,
            jobTitle,
            facebook,
            instagram,
            linkedin,
            description
        },
        "comments": *[
            _type == "blogComment" &&
            blog._ref == ^._id &&
            approved == true],
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
        revalidate: 15,
    };
};
