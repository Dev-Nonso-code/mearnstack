const express = require("express");
const router = express.Router()
const {getLandngPage} = require("../controllers/user.controller")
router.get("/", getLandngPage)
module.exports = router;