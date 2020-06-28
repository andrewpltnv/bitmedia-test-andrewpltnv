var express = require('express');
const userRoutes = require('./../controllers/users-controller.js');
var router = express.Router();
const users_statistic = require('../db/users_statistic');

/*for (let i = 0; i < users_statistic.length; i++) {
  userRoutes.usersStatisticCreate(users_statistic[i]).then(r => r);
}*/

router.get('/',userRoutes.usersStatisticAll);


module.exports = router;
