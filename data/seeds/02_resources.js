exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "computer",
          resource_description: "A PC for writing super awesome code.",
        },
        {
          id: 2,
          resource_name: "conference room",
          resource_description:
            "A super special room to meet in and talk about super awesome stuff.",
        },
        {
          id: 3,
          resource_name: "microphone",
          resource_description: "Used for recording super awesome stuff.",
        },
        {
          id: 4,
          resource_name: "delivery van",
          resource_description: "A vehecle for delivering super awesome stuff.",
        },
      ]);
    });
};
