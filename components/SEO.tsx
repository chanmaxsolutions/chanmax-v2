import Head from "next/head";
import { TypeSEO } from "../typing";

function SEO({ title, description, image }: TypeSEO) {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="google" content="notranslate" />
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.svg" />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" itemProp="image" content={image} />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
            <meta property="og:site_name" content="Chanmax" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:site" content="Chanmax" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Head>
    );
}

SEO.defaultProps = {
    title: "Chanmax - Modern App Development Company in Sri Lanka",
    description: "Helps Businesses Build Futuristic Apps",
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/cover.png`,
};

export default SEO;
