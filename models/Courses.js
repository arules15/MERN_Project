const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CourseSchema = new Schema({
  Department: {
    type: String
  },
  Course: {
    type: String
  },
  Description: {
    type: String
  }
});

module.exports = Courses = mongoose.model("course", CourseSchema);
