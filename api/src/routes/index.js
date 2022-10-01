const { Router } = require("express");
const router = Router();

var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const balanceRoute = require("./Balance/balance.js");
router.use("/", balanceRoute);

module.exports = router;