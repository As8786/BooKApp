const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true
  },
  publisherId: {
    type: String
  },
  authorId: {
    type: String
  },
  language: {
    type: String
  },
  printLength: {
    type: Number
  },
  summary: {
    type: String,
    trim: true
  },
  publicationDate: {
    type: Date
  },
  review: {
    type: Number
  }
});

const bookModel = mongoose.model("Books", bookSchema);

module.exports = bookModel;
