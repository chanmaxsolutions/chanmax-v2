import { useWindowScroll } from "@mantine/hooks";
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
    const [scroll, _] = useWindowScroll();

    const handleTop = () => window.scrollTo({ top: 0 });

    return (
        <>
            <SEO {...{ title, description, image }} />
            <Header />
            {children}
            <Footer />

            {scroll.y > 1500 && (
                <button
                    onClick={handleTop}
                    className="fixed right-10 bottom-10 z-50 hidden drop-shadow-[0px_0px_25px_#00000050] lg:block"
                >
                    <img src="/icons/arrowIcon.svg" alt="menu" className="h-[50px] w-[50px]" />
                </button>
            )}
        </>
    );
}
