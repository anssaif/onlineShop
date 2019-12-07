// const product = [{}];
const productModule = require('../models/product');
const path = require('path');
const fs = require('fs');

const itemList = productModule.prductAll;


exports.adminItemGet = (req, res) => {

    res.render('add-product.ejs');
    
};

exports.adminItemPost = (req, res)=> {

     const  prd = req.body.productName;
     const   dis = req.body.productDiscription;
   
  const productItem = new productModule.Product(prd, dis);
  itemList.push(productItem);
  console.log(itemList[0].prduct);

  res.redirect('/');
  };




exports.shopGet =  (req, res)=> {

    res.render('shop.ejs', {productList: itemList});
}


// exports.productAdmin = product;