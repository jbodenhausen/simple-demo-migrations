module.exports = function(migration) {
  // Create the Sample Category Content Type
  const category = migration
    .createContentType("sampleType")
    .name("🧪🧪🧪A Sample Type")
    .displayField("title");

  category
    .createField("title")
    .type("Symbol")
    .required(true)
    .name("Title");
};
