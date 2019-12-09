const Product = require('../models/product');
const path = require('path');






exports.adminItemGet = (req, res) => {

    res.render('add-product.ejs');

};

exports.adminItemPost = (req, res) => {

    const prd = req.body.productName;
    const dis = req.body.productDiscription;

    const newItem = new Product(prd, dis);

    newItem.save();




    res.redirect('/');
};




exports.shopGet = (req, res) => {


    Product.productAll(products => {
        res.render('shop.ejs', { productList: products });
    });

};

exports.getProductById = (req, res) =>{
   const itemId = req.params.productId;
   
   Product.findById(itemId, product => {
    console.log(product);
   })
    
       
   

}