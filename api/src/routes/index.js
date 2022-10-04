const { Router } = require("express");
const router = Router();

var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const balanceRoute = require("./Balance/balance.js");
const userCreate = require("./User/user.js");
const userLogin = require("./Login/login.js");

router.use("/balance", balanceRoute);
router.use("/create", userCreate);
router.use("/login", userLogin);

module.exports = router;