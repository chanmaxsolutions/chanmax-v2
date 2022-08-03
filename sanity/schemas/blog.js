export default {
    name: "blog",
    title: "Blog",
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
            name: "coverImage",
            title: "Cover image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "string",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
    ],
};
