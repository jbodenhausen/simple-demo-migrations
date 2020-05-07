module.exports = function(migration) {
  //Reset space 
  const resets = migration
    .editContentType("featuredBlogPosts")
    .name("Featured Blog Posts");

    resets
    .editField("blogPosts")
    .name("Blog Posts");

    resets
    .editField("blogPosts")
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["blogPost"]
        }
      ],
      linkType: "Entry"
    });
};
