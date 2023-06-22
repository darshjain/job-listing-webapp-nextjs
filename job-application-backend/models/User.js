const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  expectedCTC: {
    type: Number,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  jobID: {
    type: String,
    required: true,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
