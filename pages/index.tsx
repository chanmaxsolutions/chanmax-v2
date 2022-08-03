import type { NextPage } from "next";

import MainLayout from "../layouts/Main";
import Hero from "../components/Home/Hero";
import Main from "../components/Home/Main";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Hero />
            <Main />
        </MainLayout>
    );
};

export default Home;
