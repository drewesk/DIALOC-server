const express = require("express");
const router = express.Router();
const queries = require("../queries");


router.get("/", function(req, res, next) {
  queries.getAll().then(function(users) {
    res.json(users);
  })
});
