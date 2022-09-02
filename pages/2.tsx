import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function Two() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <Link href="/1">
                    <a>Go to Main</a>
                </Link>
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY || ""}
                    onChange={(token) => console.log(token)}
                />
            </div>
        </div>
    );
}
