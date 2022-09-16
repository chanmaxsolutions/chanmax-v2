export default {
    name: "blogComment",
    title: "Blog Comments",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "comment",
            title: "Comment",
            type: "string",
        },
        {
            name: "approved",
            title: "Approved",
            type: "boolean",
            default: false,
        },
        {
            name: "blog",
            title: "Blog",
            type: "reference",
            to: [{ type: "blog" }],
        },
    ],
};
