const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const userQueries = require("../db/user");


router.get("/", function(req, res, next) {
  queries.getAll().then(function(users) {
    res.json(users);
  });
});

router.get("/:id", function(req, res, next) {
  userQueries.getOneByID(req.params.id).then(function(user) {
    res.json(user);
  });
});

// router.get("/:email/email", function(req, res, next) {
//   userQueries.getOneByEmail(req.params.email).then(function(user) {
//     res.json(user);
//   });
// });


module.exports = router;
