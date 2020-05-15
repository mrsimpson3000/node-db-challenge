exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments();
    tbl.text("task_name", 128).notNullable();
    tbl.text("task_description", 255).notNullable();
    tbl.text("task_notes", 255);
    tbl.integer("task_completed").unsigned().defaultTo(0);
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("projects.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
