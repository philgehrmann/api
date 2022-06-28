const asyncHandler = require("express-async-handler");
const Goal = require('../model/goalModal')
//@desc     Get data
//@route    /api/goals
//@access   Private
const { json } = require("body-parser");
const { GSSAPICanonicalizationValue } = require("mongodb");

//@access   Private
const getData = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

//@desc     Post data
//@route    /api/goals
//@access   Private
const postData = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  } else {
      const goal = await Goal.create({
          text: req.body.text
      })
    res.status(200).json(goal)
  }
})

//@desc     Update data
//@route    /api/goals:id
//@access   Private
const updateData = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "update method" + req.params.id,
  })
})

//@desc     Delete data
//@route    /api/goals:id
//@access   Private
const deleteData = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "delete method" + req.params.id,
  })
})


module.exports = {
  getData,
  postData,
  updateData,
  deleteData,
};
