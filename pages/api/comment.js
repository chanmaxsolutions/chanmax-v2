import sanityClient from "@sanity/client";

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);

export default async function createComment(req, res) {
    const { _id, name, email, comment } = JSON.parse(req.body);

    try {
        await client.create({
            _type: "blogComment",
            blog: {
                _type: "reference",
                _ref: _id,
            },
            name,
            email,
            comment,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Couldn't submit comment", error });
    }

    return res.status(200).json({ message: "Comment submitted" });
}
