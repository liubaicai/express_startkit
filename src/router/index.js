const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

/* GET home page. */
router.use("/", indexRouter);
router.use("/users", usersRouter);

module.exports = router;
