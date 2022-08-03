import { table, getMinifiedItem } from "../../utils/AirtableLead";

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
        const newRecords = await table.create([{ fields }]);
        res.status(200).json(getMinifiedItem(newRecords[0]));
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};
