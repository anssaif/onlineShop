const Sequelize = require('sequelize');


const db = new Sequelize('onLineShop', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = db;