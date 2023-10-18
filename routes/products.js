var express = require('express');
const productosController = require('../controllers/productosController');
var router = express.Router();

/* GET productos listing. */
router.get('/', productosController.getAll);
module.exports = router;
