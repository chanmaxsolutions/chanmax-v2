import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "../styles/globals.css";
import GetAProposal from "../components/GetAProposal";
import Script from "next/script";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 10000);
    }, []);

    return (
        <>
            {isLoaded && (
                <>
                    <Script strategy="lazyOnload">
                        {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3091757,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                    </Script>
                    <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-2ZXS5N90MG" />
                    <Script strategy="lazyOnload">
                        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2ZXS5N90MG');
                `}
                    </Script>
                </>
            )}
            <GetAProposal />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
