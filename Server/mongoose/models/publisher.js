const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true
  },
  summary: {
    type: String,
    trim: true
  },
  review: {
    type: Number
  }
});

const publisherModel = mongoose.model("Publishers", publisherSchema);

module.exports = publisherModel;
