const mongoose = require('../utils/db')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;