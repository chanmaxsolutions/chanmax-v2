export default {
    name: "career",
    title: "Career",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "string",
        },
        {
            name: "longDescription",
            title: "Long Description",
            type: "blockContent",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "level",
            title: "Level",
            type: "string",
        },
        {
            name: "type",
            title: "Type",
            type: "string",
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
