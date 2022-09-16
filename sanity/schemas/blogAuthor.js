export default {
    name: "blogAuthor",
    title: "Blog Authors",
    type: "document",
    fields: [
        {
            name: "fullName",
            title: "Full Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "fullName",
                maxLength: 96,
            },
        },
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
        },
        {
            name: "description",
            title: "description",
            type: "string",
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
        },
        {
            name: "facebook",
            title: "Facebook",
            type: "string",
        },
        {
            name: "instagram",
            title: "Instagram",
            type: "string",
        },
        {
            name: "linkedin",
            title: "Linkedin",
            type: "string",
        },
    ],
};
