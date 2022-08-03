import ReferenceCard from "../../components/Cards/ReferenceCard";
import Hero from "../../components/Pages/Hero";
import MainLayout from "../../layouts/Main";
import { sanityClient } from "../../sanity";
import { ScrollBottomToTop } from "../../utils/framerAnimation";

export default function Reference({ data }: any) {
    return (
        <MainLayout>
            <Hero
                heading="Look at some of the Solutions we Provided in a Calendar Year."
                para="We have provided tech solutions for more than 20 businesses in the last year."
                btn="Get a Proposal"
                img="/images/reference.png"
                href="#get-a-proposal"
            />

            <ScrollBottomToTop>
                <div className="mx-auto mt-[100px] grid max-w-[1194px] gap-x-[30px] gap-y-[50px] px-3 lg:grid-cols-2">
                    {data.map((reference: any) => (
                        <ReferenceCard {...reference} />
                    ))}
                </div>
            </ScrollBottomToTop>
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const query = `*[_type == "references"]{
        _id,
        title,
        slug {
          current
        },
        coverImage,
        shortDescription
    }`;

    const data = await sanityClient.fetch(query);

    return {
        props: {
            data,
        },
        revalidate: 300, // after 300 seconds updated the old cached version
    };
};
