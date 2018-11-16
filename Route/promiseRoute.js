var express = require("express");

var router = express.Router();
var responses= require("./../Promise/promise");


router.post('/post/p', responses.create);
router.get('/get/p', responses.findAll);
router.get('/get/p/:id', responses.findOne);
router.put('/:id/update/p', responses.update);
router.patch('/:id/patch/p', responses.delete);


module.exports = router;