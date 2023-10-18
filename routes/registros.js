var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  res.send([{ 'user': 'admin', 'pass': 'admin' }, { 'user': 'invitado', 'pass': 'invitado' }])
});
router.post('/:id', function (req, res, next) {
  let id = req.params.id;
  res.send([{ 'user': id, 'pass': id }])
});
module.exports = router;
