const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the Comment schema
const CommentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const comment = mongoose.model('Comment', CommentSchema);
module.exports = comment;
