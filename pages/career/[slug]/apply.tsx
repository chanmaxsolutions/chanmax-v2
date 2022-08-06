import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MainLayout from "../../../layouts/Main";
import { sanityClient } from "../../../sanity";
import ApplicationForm from "../../../components/career/applicationForm";

export default function ApplyCareer({ title, category, type, level }: any) {
    return (
        <MainLayout title={`Career - ${title}`} description={title}>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY || ""}>
                <ApplicationForm {...{ title, category, type, level }} />
            </GoogleReCaptchaProvider>
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
        revalidate: 15,
    };
};
