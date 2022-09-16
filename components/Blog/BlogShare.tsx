import { useRouter } from "next/router";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

export default function BlogShare() {
    const { asPath } = useRouter();

    return (
        <div className="mt-20">
            <h1 className="my-5 font-AvenirBold text-[34px]">Share this post</h1>
            <div className="flex space-x-2">
                <FacebookShareButton url={`https://www.chanmax.io${asPath}`}>
                    <button className="flex items-center gap-x-2 bg-gray-200 py-2 px-4 text-xl">
                        <img src="/icons/facebook.svg" width={22} /> Facebook
                    </button>
                </FacebookShareButton>
                <TwitterShareButton url={`https://www.chanmax.io${asPath}`}>
                    <button className="flex items-center gap-x-2 bg-gray-200 py-2 px-4 text-xl">
                        <img src="/icons/twitter.svg" width={22} />
                        Twitter
                    </button>
                </TwitterShareButton>
                <LinkedinShareButton url={`https://www.chanmax.io${asPath}`}>
                    <button className="flex items-center gap-x-2 bg-gray-200 py-2 px-4 text-xl">
                        <img src="/icons/linkedin.svg" width={22} />
                        LinkedIn
                    </button>
                </LinkedinShareButton>
            </div>
        </div>
    );
}
