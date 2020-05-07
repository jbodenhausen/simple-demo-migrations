module.exports = function(migration) {
  // Create the Sample Category Content Type
  const category = migration
    .createContentType("sampleCategory")
    .name("🧪🧪🧪A Sample Category")
    .displayField("name");

  category
    .createField("name")
    .type("Symbol")
    .required(true)
    .name("Name");

  category
    .createField("header")
    .type("Symbol")
    .name("Header");

  category
    .createField("icon")
    .type("Link")
    .linkType("Asset")
    .name("Icon")
    .validations([
      {
        linkMimetypeGroup: ["image"]
      },
      {
        assetFileSize: {
          min: 0,
          max: 5000
        },
        message:
          "The image you are trying to use is too big. Use one that's less than 50KB."
      }
    ]);

  //Add the Sample Categories field to the sample type with the appropriate validation
  const sample = migration.editContentType("sampleType");

  sample
    .createField("sampleCategories")
    .type("Array")
    .name("Sample Categories");

  sample.editField("sampleCategories").items({
    type: "Link",
    validations: [
      {
        linkContentType: ["sampleCategory"]
      }
    ],
    linkType: "Entry"
  });
};
