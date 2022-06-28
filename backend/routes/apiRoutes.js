const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  updateData,
  deleteData,
} = require("../controllers/apiController");

router.route('/').get(getData).post(postData)
router.route("/:id").put(updateData).delete(deleteData)

module.exports = router;
