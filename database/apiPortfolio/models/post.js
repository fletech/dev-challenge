const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  body: String,
  author: String,
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", userSchema, "blog");
