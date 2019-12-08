const Product = require('../models/product');
const path = require('path');






exports.adminItemGet = (req, res) => {

    res.render('add-product.ejs');
    
};

exports.adminItemPost = (req, res)=> {

     const  prd = req.body.productName;
     const   dis = req.body.productDiscription;
     
     const newItem = new Product(prd, dis);

     newItem.save();

    
     
    
  res.redirect('/');
  };




exports.shopGet =  (req, res)=> {

    // res.render('shop.ejs', {productList: productModule.productAll()});
    Product.productAll(products=> {
        res.render('shop.ejs', {productList: products});
    });
};