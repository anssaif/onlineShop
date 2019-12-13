const Sequelize = require('sequelize');
const sequelize = require('../database/dataBase');


 

const Product =  sequelize.define('products',{

    product: Sequelize.STRING,

    discription: Sequelize.TEXT
});

module.exports = Product;
