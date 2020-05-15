exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Project 1",
          project_description: "This the the description for project 1.",
          project_completed: 0,
        },
        {
          id: 2,
          project_name: "Project 2",
          project_description: "This the the description for project 2.",
          project_completed: 0,
        },
        {
          id: 3,
          project_name: "Project 3",
          project_description: "This the the description for project 3.",
          project_completed: 0,
        },
      ]);
    });
};
