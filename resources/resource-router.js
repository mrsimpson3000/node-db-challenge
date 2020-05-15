const express = require("express");

const Resources = require("./resource-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", isValidResource, (req, res) => {
  const resourceData = req.body;
  if (isValidResource(resourceData)) {
    Resources.add(resourceData)
      .then((resource) => {
        res.status(201).json(resource);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ message: "You must include the resource name." });
  }
});

module.exports = router;
