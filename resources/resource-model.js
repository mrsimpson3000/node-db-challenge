const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  isValidResource,
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id }).first();
}

function add(resource) {
  return db("resources")
    .insert(resource)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function isValidResource(resource) {
  return Boolean(resource.resource_name);
}
