import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";

type Props = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
};

export default function MainLayout({ children, title, description, image }: Props) {
    return (
        <>
            <SEO {...{ title, description, image }} />
            <Header />
            {children}
            <Footer />
        </>
    );
}
