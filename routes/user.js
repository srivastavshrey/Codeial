const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const db = require("../config/mongoose");
router.use(express.urlencoded());
router.use(express.static("assets"));
router.get("/profile", userController.profile);
router.get("/sign-up", userController.signUp);
router.get("/sign-in", userController.signIn);
router.post("/create", userController.createUser);
router.post("/create-session", userController.createSession);
router.post("/sign-out", userController.closeSession);
module.exports = router;
