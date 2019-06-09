"use strict";

const express = require("express");
const app = express();
const question = require("./question.api");
const scores = require("./scores.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", question);
app.use("/api", scores);


let port = 3000;
app.listen(port, () => console.log(`Server running on PORT: ${port}.`));

