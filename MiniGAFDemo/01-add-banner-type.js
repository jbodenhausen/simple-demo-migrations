module.exports = function(migration) {
  ////////////////////////////////////////
  // Create the Sample Banner Content Type
  ////////////////////////////////////////
  const banner = migration
    .createContentType("banner")
    .name("🧪🧪🧪Banner")
    .displayField("internalTitle");

  banner
    .createField("internalTitle")
    .type("Symbol")
    .required(true)
    .name("Internal Title");

  banner
    .createField("header")
    .type("Symbol")
    .required(true)
    .name("Header");

  banner
    .createField("description")
    .type("Text")
    .required(true)
    .name("Description");

  banner
    .changeFieldControl("description", "builtin", "multipleLine");
};
