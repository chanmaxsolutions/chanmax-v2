import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import BlogCard2 from "../../components/Cards/BlogCard2";
import MainLayout from "../../layouts/Main";
import { sanityClient, urlFor } from "../../sanity";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function Blog({ blogs, featuredBlog }: any) {
    return (
        <MainLayout>
            <div className="mx-auto mt-[100px] max-w-3xl overflow-hidden rounded-[10px] bg-[#F8F8F8] px-3 lg:px-0">
                <ScrollBottomToTop>
                    <Link href={`/blog/${featuredBlog?.slug.current}`}>
                        <a className="rounded-[10px] bg-[#F8F8F8]">
                            <Image
                                width={768}
                                height={450}
                                src={urlFor(featuredBlog?.coverImage).url()}
                                className="rounded-[10px]"
                            />
                            <div className="p-[50px] pt-[30px]">
                                <h2 className="font-AvenirBold text-2xl lg:text-[34px]">{featuredBlog?.title}</h2>
                                <p className="mt-[17px] text-2xl">{featuredBlog?.shortDescription}</p>
                                <div className="mt-[35px] flex w-auto items-center gap-x-2 hover:underline">
                                    <p className="font-AvenirDemi text-lg">Read more</p>
                                    <HiOutlineArrowRight size={16} />
                                </div>
                            </div>
                        </a>
                    </Link>
                </ScrollBottomToTop>
            </div>

            <div className="mx-auto mt-[50px] flex max-w-3xl flex-col gap-y-[50px] px-3 lg:px-0">
                {blogs.map((blog: any) => (
                    <BlogCard2 {...blog} />
                ))}
            </div>
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const blogQuery = `*[_type == "blog"]{
        _id,
        title,
        slug {
          current
        },
        coverImage,
        shortDescription
    }`;

    const featuredQuery = `*[_type == "featuredBlog"]{
        _id,
        blog -> {
           title,
           slug,
           coverImage,
           shortDescription
        }
    }`;

    const blogs = await sanityClient.fetch(blogQuery);
    const featuredBlog = await sanityClient.fetch(featuredQuery);

    return {
        props: {
            blogs,
            featuredBlog: featuredBlog?.[0]?.blog,
        },
        revalidate: 300, // after 300 seconds updated the old cached version
    };
};
