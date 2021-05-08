// var express = require('express');
// var router = express.Router();
// var db = require('../db/db');
// const mysql = require('mysql');
// // db.insert

// //数据库配置
// let conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'pxl795926',
//     database: 'book',
//     port: 3306
// });
// //数据库连接





// /* GET users listing. */
// router.get('/', function (req, res, next) {
//     conn.connect(function (err) {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log('连接成功')
//         }
//     });
//     let project = { project_name: 'test1', create_time: '2017-03-28 14:09:29' };
//     let sqlString = 'INSERT INTO project SET ?';
//     conn.query(sqlString, project, function (id) {
//         console.log('inserted id is:' + id);
//     });
//     db.close(conn);
//     res.send(JSON.stringify(project))
//     return;
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    let user = req.query; //会把用户信息拿到
    let inform = {
        username: "用户名是：" + user.username,
        password: "密码是： " + user.password
    }
    res.send(inform);

});

module.exports = router;
