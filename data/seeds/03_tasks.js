exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_name: "task 1",
          task_description: "Do this task first.",
          task_notes: "",
          task_completed: 0,
          project_id: 1,
        },
        {
          id: 2,
          task_name: "task 2",
          task_description: "Do this task second.",
          task_notes: "",
          task_completed: 0,
          project_id: 1,
        },
        {
          id: 3,
          task_name: "task 3",
          task_description: "Do this task third.",
          task_notes: "",
          task_completed: 0,
          project_id: 1,
        },
        {
          id: 4,
          task_name: "task 1",
          task_description: "Do this task first.",
          task_notes: "",
          task_completed: 0,
          project_id: 2,
        },
        {
          id: 5,
          task_name: "task 2",
          task_description: "Do this task second.",
          task_notes: "",
          task_completed: 0,
          project_id: 2,
        },
        {
          id: 6,
          task_name: "task 1",
          task_description: "Do this task first.",
          task_notes: "",
          task_completed: 0,
          project_id: 3,
        },
        {
          id: 7,
          task_name: "task 2",
          task_description: "Do this task second.",
          task_notes: "",
          task_completed: 0,
          project_id: 3,
        },
        {
          id: 8,
          task_name: "task 3",
          task_description: "Do this task third.",
          task_notes: "",
          task_completed: 0,
          project_id: 3,
        },
        {
          id: 9,
          task_name: "task 4",
          task_description: "Do this task fourth.",
          task_notes: "",
          task_completed: 0,
          project_id: 3,
        },
      ]);
    });
};
