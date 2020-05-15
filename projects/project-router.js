const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", isValidProject, (req, res) => {
  const projectData = req.body;
  if (isValidProject(projectData)) {
    Projects.add(projectData)
      .then((project) => {
        res.status(201).json(project);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res
      .status(400)
      .json({
        message:
          "You must include the project name. Please include the project name and try again.",
      });
  }
});

module.exports = router;
