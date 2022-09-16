import { useRouter } from "next/router";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function BlogShare() {
    const { asPath } = useRouter();

    return (
        <div className="mt-20">
            <h1 className="my-5 font-AvenirBold text-[34px]">Share this post</h1>
            <div className="flex space-x-2">
                <FacebookShareButton url={`https://www.chanmax.io${asPath}`}>
                    <button className="flex items-center gap-x-2 bg-dark py-2 px-4 text-xl text-white">
                        <FaFacebookF className="text-white" size={22} /> Facebook
                    </button>
                </FacebookShareButton>
                <TwitterShareButton url={`https://www.chanmax.io${asPath}`}>
                    <button className="flex items-center gap-x-2 bg-dark py-2 px-4 text-xl text-white">
                        <FaTwitter className="text-white" size={22} />
                        Twitter
                    </button>
                </TwitterShareButton>
                <LinkedinShareButton url={`https://www.chanmax.io${asPath}`}>
                    <button className="flex items-center gap-x-2 bg-dark py-2 px-4 text-xl text-white">
                        <FaLinkedin className="text-white" size={22} />
                        LinkedIn
                    </button>
                </LinkedinShareButton>
            </div>
        </div>
    );
}
