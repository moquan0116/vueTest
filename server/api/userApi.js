let express = require('express');
let router = express.Router();
let bodyParser = require("body-parser");

const config = require('../config');
const mysql = require('mysql');

// router.use(require('cors')());

router.get('/', function (req, res) {
    res.send('出来吧')
});


router.get('/reg', bodyParser.json(),(req, res) => {
    let connection = mysql.createConnection(config);
    connection.connect();
    let post = req.body;
    let data = {username: post.username, password: post.password};
    let pwd = {
        toSqlString: function() {
            return 'password(123456)';
        }
    };

    connection.query("insert into hj_user (username, password)values(?, ?)", ['haha',pwd], function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});



router.get('/login',function (req, res) {
    let connection = mysql.createConnection(config);
    let pwd = { toSqlString: function() { return 'password(123456)'; } };
    connection.connect();

    connection.query('select * from hj_user where password = ?', [pwd],function (error, results, fields) {
        if (error) throw error;
        res.send(fields)
    });
});
module.exports = router;