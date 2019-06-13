const express = require('express');
const userDao = require('../dao/userDao');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* add user. */
router.get('/addUser', async (req, res, next) => {
	const  user = req.query;
	const [err, value] = await userDao.add(user);
});

module.exports = router;
