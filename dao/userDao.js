//实现与mySQL的交互
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig')
// const pool = require('../config/connect');
const sql = require('./userSqlMapping');


// const jsonWrite = (res, ret) => {
// 	if(typeof ret === 'undefined') {
// 		res.json({
// 			code:'1',
// 			msg: '操作失败'
// 		});
// 	} else {
// 		res.json(ret);
// 	}
// }
const pool = mysql.createPool(dbConfig.mysql)
module.exports = {
	add: (user) => new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			const {name, age} = user;
			connection.query(sql.insert, [name, age], (err, result)=> {
				if (result) {
					result = {
						code: 200,
						msg: '增加成功'
					}
				}

				connection.release();
				resolve([err, result]) 
			})
		})
	})
}
