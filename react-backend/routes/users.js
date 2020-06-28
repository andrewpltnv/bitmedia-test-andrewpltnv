var express = require('express');
const userRoutes = require('./../controllers/users-controller.js');
var router = express.Router();
const users = require('../db/users');


router.get('/all', userRoutes.usersList);
router.get('/:id', function (req, res) {
  res.send(users[req.params.id]);
});
router.get('/:from/:to', function (req, res) {
  res.send(users.slice(req.params.from,req.params.to));
});



module.exports = router;
