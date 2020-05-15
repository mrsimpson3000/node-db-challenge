exports.up = function (knex) {
  return knex.schema.createTable("project_resources", (tbl) => {
    tbl.increments();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("projects.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("resources.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("project_resources");
};
