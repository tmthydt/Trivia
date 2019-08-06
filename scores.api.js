"use strict";
const express = require("express");
const scores = express.Router();
const pool = require("./connection");

function getScores(res) {
  pool
    .query("SELECT * FROM scores ORDER BY score DESC LIMIT 10")
    .then(result => res.json(result.rows));
}

scores.get("/scores", (req, res) => {
  getScores(res);
});

scores.post("/scores", (req, res) => {
  pool
    .query("INSERT INTO scores (username, score) VALUES ($1::text, $2::int)", [
      req.body.username,
      req.body.score
    ])
    .then(() => getScores(res));
});

module.exports = scores;
