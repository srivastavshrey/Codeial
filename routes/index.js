const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home-controller");
const db = require("../config/mongoose");
router.use(express.urlencoded());
router.use(express.static("assets"));
router.get("/", homeController.home);
router.use("/user", require("./user"));
module.exports = router;
