const express = require("express");
const graphQLHTTP = require("express-graphql");
const cors = require("cors");

const mongoose = require("./mongoose/mongooseConfig");
const schema = require("./graphQl/schema");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphQLHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listening on port 4000");
  }
});
