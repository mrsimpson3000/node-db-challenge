const db = require("../data/db-config");

module.exports = {
  find,
};

function find() {
  return db
    .select(
      "tasks.id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .from("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id");
}

function add(resource) {
  return db("resources").insert(resource);
}
