var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Unidad 2' });
  res.render('index', { title: 'Unidad 2' });
});
/* GET Registro page. */
router.get('/registro', function(req, res, next) {
  res.send('Unidad 2. Registro' );
});
/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Unidad 2. Login' });
});


module.exports = router;
