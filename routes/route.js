var express = require('express');
var router = express.Router();

var home_controller = require('../controller/home.controller');

router.get('/', home_controller.home);

module.exports = router;
