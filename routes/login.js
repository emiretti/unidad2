var express = require('express');
var router = express.Router();

/* GET user objeto */
router.put('/', function (req, res, next) {
  res.send({'user':'admin','pass':'admin'})
});
module.exports = router;
