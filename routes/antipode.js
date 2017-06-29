const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const userQueries = require("../db/user");

router.get('/antipodeList', (req, res, next) => {
  queries.getAntipodes().then((antipodes) => {
    res.json(antipodes);
  });
});

router.post('/:id', (req, res, next) => {
  queries.createAntipode(req.params.id, req.body).then((result) => {
    res.json(result);
  });
});

router.get('/:id/antipodes', (req, res, next) => {
  queries.getUserAntipodes(req.params.id).then((antipodes) => {
    res.json(antipodes);
  });
});


module.exports = router;
