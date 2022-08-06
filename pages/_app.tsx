import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "../styles/globals.css";
import GetAProposal from "../components/GetAProposal";
import Script from "next/script";
import { useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }: AppProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 10000);
    }, []);

    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY || ""}>
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
        </GoogleReCaptchaProvider>
    );
}

export default MyApp;
