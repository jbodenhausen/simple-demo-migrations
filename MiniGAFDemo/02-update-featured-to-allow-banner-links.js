module.exports = function(migration) {
  ////////////////////////////////////////
  //Update Featured Blog Posts to allow linking banners and reflect appropriately in  titles
  ////////////////////////////////////////
  const featured = migration
    .editContentType("featuredBlogPosts")
    .name("Featured Content");

    //Update field name to reflec that it's not just blog posts available
    featured
    .editField("blogPosts")
    .name("Content");

    //Update validations to allow blog posts or banners
    featured
    .editField("blogPosts")
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["banner","blogPost"]
        }
      ],
      linkType: "Entry"
    });
};
