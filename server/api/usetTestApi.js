let express = require('express');
let router = express.Router();
let bodyParser = require("body-parser");

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
    username: Sequelize.STRING(50),
    password: Sequelize.STRING(50),
    address: Sequelize.STRING,
    secret: Sequelize.STRING,
    name: Sequelize.STRING,
    sex: Sequelize.TINYINT,
    status: Sequelize.TINYINT
},{
    timestamps: false,
    freezeTableName: true,
});

const ripple = sequelize.define('hj_user', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    username: Sequelize.STRING(50),
    password: Sequelize.STRING(50),
    address: Sequelize.STRING,
    secret: Sequelize.STRING,
    name: Sequelize.STRING,
    sex: Sequelize.TINYINT,
    status: Sequelize.TINYINT
},{
    timestamps: false,
    freezeTableName: true
});


Player.belongsTo(Team); // 将向 Player 添加一个 teamId 属性以保存 Team 的主键值