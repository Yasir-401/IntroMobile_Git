var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/products/");
});

module.exports = router;

//adding a comment here as well
