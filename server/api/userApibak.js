var express = require('express');
var router = express.Router();
var models = require('../db');
var mysql = require('mysql');
var $sql = require('../sqlMap');
var bodyParser = require("body-parser");
// 连接数据库
/*var conn = mysql.createConnection(models.mysql);

conn.connect();*/
/*var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};*/

router.get('/', function (req, res) {
    res.send('出来吧')
});
// 增加用户接口
router.get('/test', (req, res) => {
    var conn = mysql.createConnection(models.mysql);

    conn.connect();

    var sql = 'select * from hj_user';
    var params = req.body;
    console.log(params);
    conn.query(sql,function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(result);
        }
    })
});

router.post('/ripple', bodyParser.json(),(req, res) => {
    res.send(req.body.address);
});


module.exports = router;