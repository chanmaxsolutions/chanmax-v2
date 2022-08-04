import { table, getMinifiedItem } from "../../utils/AirtableLead";
import verifyCaptcha from "../../utils/verifyCaptcha";
import requestIp from "request-ip";

export default async (req, res) => {
    const fields = {
        Modules: req.body["Modules"],
        Services: req.body["Services"],
        "Project Description": req.body["Project Description"],
        WhatsApp: req.body["WhatsApp"],
        Company: req.body["Company"],
        Email: req.body["Email"],
        Name: req.body["Name"],
    };

    try {
        const ip = requestIp.getClientIp(req);

        const response = await verifyCaptcha(req.body["captcha"], ip);

        if (!response) throw new Error("Captcha verification failed");

        const newRecords = await table.create([{ fields }]);

        res.status(200).json(getMinifiedItem(newRecords[0]));
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};
