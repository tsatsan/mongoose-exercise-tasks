const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAdd: {
    type: Number,
    default: +new Date()
  },
  updateAdd: {
    type: Number,
    default: null
  }
})
const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
