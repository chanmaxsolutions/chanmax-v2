import CareerCard from "../../components/Cards/CareerCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { sanityClient } from "../../sanity";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function Reference({ data }: any) {
    return (
        <MainLayout>
            <Hero
                heading="Career Opportunities for Passionate Learners and Leaders."
                para="Have a passion for technology and being part of an innovative team? Join Chanmax."
                img="/images/reference.png"
                href="#get-a-proposal"
            />

            <ScrollBottomToTop>
                <div className="mx-auto mt-[100px] flex max-w-3xl flex-col gap-y-[50px] px-3">
                    {data.map((career: any) => (
                        <CareerCard {...career} />
                    ))}
                </div>
            </ScrollBottomToTop>
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const query = `*[_type == "career"]{
        _id,
        title,
        type,
        level,
        category,
        slug {
          current
        },
        shortDescription,
    }`;

    const data = await sanityClient.fetch(query);

    return {
        props: {
            data,
        },
        revalidate: 300, // after 300 seconds updated the old cached version
    };
};
