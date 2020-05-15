const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  isValidProject,
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function add(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function isValidProject(project) {
  return Boolean(project.project_name);
}
