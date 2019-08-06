"use strict";

const express = require("express");
const questions = express.Router();
const pool = require("./connection");

function getQuestions(res) {
  pool
    .query("SELECT * FROM questions ORDER BY RANDOM() LIMIT 10")
    .then(result => res.json(result.rows));
}

questions.get("/questions", (req, res) => {
  getQuestions(res);
});

module.exports = questions;
