import { table, getMinifiedItem } from "../../utils/AirtableCareer";

export default async (req, res) => {
    const fields = {
        "Applied Job": req.body["Applied Job"],
        "Expertise Explains": req.body["Expertise Explains"],
        "Why Chanmax?": req.body["Why Chanmax?"],
        "Other Link 2": req.body["Other Link 2"],
        "Other Link 1": req.body["Other Link 1"],
        LinkedIn: req.body["LinkedIn"],
        Name: req.body["Name"],
        Email: req.body["Email"],
        WhatsApp: req.body["WhatsApp"],
    };
    try {
        const newRecords = await table.create([{ fields }]);
        res.status(200).json(getMinifiedItem(newRecords[0]));
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong! 😕" });
    }
};
