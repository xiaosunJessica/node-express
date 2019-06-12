const express = require('express');
const userDao = require('../dao/userDao');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* add user. */
router.get('/addUser', function(req, res, next) {
	userDao.add(req, res, next);
});

module.exports = router;
