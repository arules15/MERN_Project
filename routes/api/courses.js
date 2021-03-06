const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Post model
const Post = require("../../models/Post");

//Courses model
const Course = require("../../models/Courses");

// @route   GET api/course/courses/:department
// @desc    Get all courses in department
// @access  Public
router.get("/course/:department", (req, res) => {
  Course.find({ Department: req.params.department })
    .distinct("Course")
    .then(department => res.json(department))
    .catch(err => res.json(err));
});

// @route   GET api/courses
// @desc    gets all the departments
// @access  Public route
router.get("/", (req, res) => {
  Course.find()
    .distinct("Department")
    // .then(Department => {
    //   if (departMentArray.includes(Department)) {
    //     //do nothing
    //   } else {
    //     departmentArray.push(Department);
    //   }
    // })
    //.sort({ Department: -1 })
    .then(Department => {
      res.json(Department);
    })
    .catch(err => res.json(err));
});

// @route   GET api/courses/search/:search
// @desc    gets search results
// @access  Public route
let query;
router.get("/course/search/:search", (req, res) => {
  query = req.params.search;
  Course.find({ Course: new RegExp(query, "i") }) //this is supposed to map all the strings that start with query, query holds the search value
    .distinct("Course")
    .then(course => res.json(course))
    .catch(err => res.json(err));
});

router.get("/courses/:course", (req, res) => {
  Course.find({ Course: req.params.course })
    .distinct("Description")
    .then(course => {
      res.json(course);
    })
    .catch(err => res.json(err));
});

module.exports = router;
