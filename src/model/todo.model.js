const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true, useUnifiedTopology: true
})

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;