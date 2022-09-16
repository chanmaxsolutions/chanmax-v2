export interface TypeSEO {
    title?: string;
    description?: string;
    image?: string;
}

export interface TypeBlogCard {
    img: string;
    title: string;
    href?: string;
    desc: string;
}

export interface TypeCustomerCard {
    author: string;
    position: string;
    desc: string;
}

export interface TypeHeroSection {
    heading: string;
    para: string;
    btn?: string;
    img: string;
    href?: string;
}

export interface TypeApproachSection {
    heading: string;
    para: string;
    img: string;
    bg: string;
}

export interface TypeWebAppTechCard {
    heading: string;
    img: string;
}

export interface TypeBlog {
    title: string;
    mainImage: string;
    body: any;
    blogCategory: {
        name: string;
    };
    blogAuthor: {
        fullName: string;
        avatar: any;
        jobTitle: string;
        facebook: string;
        linkedin: string;
        instagram: string;
        description: string;
    };
}

export interface TypeReference {
    title: string;
    slug: {
        current: string;
    };
    coverImage: {};
    mainImage: string;
    shortDescription: string;
    body: any;
    customerName: string;
    customerCountry: string;
    customerImage: {};
    customerFeedback: string;
}

export interface TypeCareer {
    title: string;
    slug: {
        current: string;
    };
    shortDescription: string;
    longDescription: any;
    category: string;
    level: string;
    type: string;
    skills: [string];
}

export interface TypeLeadForm {
    Modules: [string];
    Services: [string];
    "Project Description": string;
    WhatsApp: string;
    Company: string;
    Email: string;
    Name: string;
}
