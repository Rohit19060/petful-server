const express = require("express");
const json = require("body-parser").json();
const Pets = require("./pets.service");
const router = express.Router();

router.get("/", (req, res) => {
  let pets = Pets.get();
  return res.json(pets).status(200);
});

router.delete("/:type", json, (req, res) => {
  const { type } = req.params;
  Pets.dequeue(type);
  return res.status(204).end();
});

module.exports = router;
