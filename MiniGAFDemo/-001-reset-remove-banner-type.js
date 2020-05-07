module.exports = function(migration) {
  //Reset space 
  const resets = migration
    .deleteContentType("banner");
    
};
