export default {
    name: "featuredBlog",
    title: "Featured Blog",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "blog",
            title: "Blog",
            type: "reference",
            to: [{ type: "blog" }],
        },
    ],
};
