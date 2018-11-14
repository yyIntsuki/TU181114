var express = require('express');
var router = express.Router();

var product_controller = require('../controller/product.controller');

router.post('/create', product_controller.create);

router.get('/:id', product_controller.details);

router.put('/:id', product_controller.update);

router.delete('/:id', product_controller.delete);

module.exports = router;