const express = require("express");

const Tasks = require("./task-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
