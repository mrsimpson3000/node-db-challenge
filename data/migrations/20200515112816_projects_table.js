exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();
    tbl.text("project_name", 128).unique().notNullable();
    tbl.text("project_description", 255);
    tbl.integer("project_completed").unsigned().defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
