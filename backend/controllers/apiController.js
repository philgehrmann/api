const asyncHandler = require("express-async-handler");
const Goals = require("../model/goalModal");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const { rawListeners } = require("process");
const { equal } = require("assert");

//@desc     Get data
//@route    /api/goals
//@access   Private
const getData = asyncHandler(async (req, res) => {
  const goals = await Goals.find();
  res.status(200).json(goals);
});

//@desc     Post data
//@route    /api/goals
//@access   Private
const postData = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add your Userdata");
  } else {
    const users = await Goals.create({
      text:req.params.text
    });
    res.status(200).json(users);
  }
});

//@desc     Update data
//@route    /api/goals:id
//@access   Private
const updateData = asyncHandler(async (req, res) => {
  const goal = await Goals.find(req.param.id);

  if (!goal) {
    res.status(400);
    throw new Error("Not possible to update");
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc     Delete data
//@route    /api/goals:id
//@access   Private
const deleteData = asyncHandler(async (req, res) => {
  const goal = await Goals.find(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Can't deleted because data-set not found");
  }

  const removeGoal = await Goals.findByIdAndDelete(req.params.id)
  res.status(200).json(removeGoal);
});


module.exports = {
  getData,
  postData,
  updateData,
  deleteData,
};
