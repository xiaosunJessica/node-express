//实现与mySQL的交互
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig')
// const pool = require('../config/connect');
const sql = require('./userSqlMapping');


const jsonWrite = (res, ret) => {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
}
const pool = mysql.createPool(dbConfig.mysql)
console.info(pool, '----pool')
module.exports = {
	add: function(req, res, next){
		pool.getConnection(function(err, connection){
			const param = req.query || req.params;
			connection.query(sql.insert, [param.name, param.age], (err, result)=> {
				if (result) {
					result = {
						code: 200,
						msg: '增加成功'
					}
				}
				jsonWrite(res, result);

				connection.release();
			})
		})
	}
}
