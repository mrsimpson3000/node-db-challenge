exports.up = function (knex) {
  return knex.schema.createTable("resources", (tbl) => {
    tbl.increments();
    tbl.text("resource_name", 128).unique().notNullable();
    tbl.text("resource_description", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources");
};
