const express = require("express");
const graphQLHTTP = require("express-graphql");
const mongoose = require("./mongoose/config");

const app = express();

app.use("/graphql", graphQLHTTP({}));

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
