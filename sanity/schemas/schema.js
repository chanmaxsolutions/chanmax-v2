import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import reference from "./reference";
import blog from "./blog";
import blogComment from "./blogComment";
import blogCategory from "./blogCategory";
import blogAuthor from "./blogAuthor";
import featuredBlog from "./featuredBlog";
import career from "./career";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        blockContent,
        reference,
        blog,
        blogCategory,
        blogAuthor,
        blogComment,
        featuredBlog,
        career,
    ]),
});
