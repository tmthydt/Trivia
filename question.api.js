"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connection");

function selectAll(res) {
  pool.query("SELECT * FROM questions").then(result => {
    res.json(result.rows);
  });
};

router.get("/questions", (req, res) => {
  selectAll(res);
});

module.exports = router;