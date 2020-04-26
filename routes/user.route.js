var express = require('express');
var router = express.Router();


var db = require('../db.js');
var controller = require('../controller/user.controller');

router.get('', controller.index);

router.get('/search', controller.search)

router.get('/create', controller.create);

router.get('/:id', controller.getId); // route parameters

router.post('/create', controller.postCreate);

module.exports = router;