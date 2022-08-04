import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { HiX } from "react-icons/hi";
import Slide from "./Slide";

export default function GetAProposal() {
    const { asPath, pathname, push, query } = useRouter();
    const [visible, setVisible] = useState(false);

    const Provider = visible ? GoogleReCaptchaProvider : ({}: any) => <></>;

    const handleClose = () => {
        if (query.slug) {
            push(`${pathname}?slug=${query.slug}`);
        } else {
            push(pathname, {}, { scroll: false });
        }
    };

    useEffect(() => {
        if (asPath.includes("get-a-proposal")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [asPath]);

    return (
        <Provider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY || ""}>
            <Modal
                visible={visible}
                onCancel={handleClose}
                closable={false}
                footer={null}
                width="95vw"
                bodyStyle={{ height: "90vh", overflowY: "auto" }}
                centered
            >
                <button onClick={handleClose} className="absolute right-10 top-10 z-10">
                    <HiX size={30} />
                </button>
                <Slide />
            </Modal>
        </Provider>
    );
}
