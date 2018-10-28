var express = require('express');
var router = express.Router();

const config = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const user = sequelize.define('hj_user', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    user_type: Sequelize.BOOLEAN,
    user_nickname: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true,
});

user.findById(1).then(project => {
    console.log(project);
});

module.exports = router;