const express = require("express");

const Resources = require("./resource-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
