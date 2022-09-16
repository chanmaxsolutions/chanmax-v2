import BlogCard2 from "../../components/Cards/BlogCard2";
import MainLayout from "../../layouts/Main";
import { sanityClient } from "../../sanity";
import { OpacityFramer, TopToBottomFramer } from "../../utils/framerAnimation";

export default function Blog({ blogs }: any) {
    return (
        <MainLayout title="Blog - Chanmax" description="Blog - Chanmax">
            <div className="bg-primary py-[27px] selection:bg-dark selection:text-white">
                <OpacityFramer>
                    <div className="mx-auto flex h-[403px] max-w-[1266px] items-center justify-center bg-[url('/images/reference-bg.svg')] bg-cover px-3 py-4">
                        <TopToBottomFramer>
                            <h1 className="text_line_img2 text-center font-[AvenirBold] text-[30px] leading-[1.2em] text-dark after:right-10 lg:text-[50px] lg:after:right-5">
                                Chanmax Blog
                            </h1>
                            <p className="mt-10 max-w-3xl text-center text-2xl">
                                A collection of stories sharing insights from our customers, our employees, industry
                                thought leaders, and more.
                            </p>
                        </TopToBottomFramer>
                    </div>
                </OpacityFramer>
            </div>
            <div className="mx-auto mt-[100px] grid max-w-[1194px] gap-x-[30px] gap-y-[50px] px-3 lg:grid-cols-2">
                {blogs.map((blog: any, key: string) => (
                    <BlogCard2 key={key} {...blog} />
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

    const blogs = await sanityClient.fetch(blogQuery);
    return {
        props: {
            blogs,
        },
        revalidate: 300, // after 300 seconds updated the old cached version
    };
};
