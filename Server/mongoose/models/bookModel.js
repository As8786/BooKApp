const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true
  },
  publisher: {
    type: String
  },
  author: {
    type: String
  },
  language: {
    type: String
  },
  printLength: {
    type: String
  },
  summary: {
    type: String,
    trim: true
  },
  publicationDate: {
    type: String
  },
  review: {
    type: String
  },
  image: {
    type: String
  }
});

const bookModel = mongoose.model("Books", bookSchema);

module.exports = bookModel;
