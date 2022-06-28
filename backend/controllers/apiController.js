const asyncHandler = require("express-async-handler");
const Users = require("../model/usersModal");
//@desc     Get data
//@route    /api/goals
//@access   Private
const { json } = require("body-parser");

//@access   Private
const getData = asyncHandler(async (req, res) => {
  const goals = await Users.find();
  res.status(200).json(goals);
});

//@desc     Post data
//@route    /api/goals
//@access   Private
const postData = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  } else {
    const users = await Users.create({
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      dayofbirth: req.body.dayofbirth,
      password: req.body.password,
    });
    res.status(200).json(users);
  }
});

//@desc     Update data
//@route    /api/goals:id
//@access   Private
const updateData = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "update method" + req.params.id,
  });
});

//@desc     Delete data
//@route    /api/goals:id
//@access   Private
const deleteData = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "delete method" + req.params.id,
  });
});

module.exports = {
  getData,
  postData,
  updateData,
  deleteData,
};
