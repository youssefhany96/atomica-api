const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the Comment schema
const CommentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Exports the CommentSchema for use elsewhere.
module.exports = mongoose.model('Comment', CommentSchema);
