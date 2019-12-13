
const path = require('path');
const sequelize = require('sequelize');
const Product = require('../models/product');






exports.adminItemGet = (req, res) => {

    res.render('add-product.ejs');

};

exports.adminItemPost = (req, res) => {

    const product = req.body.productName;
    const discription = req.body.productDiscription;

    Product.create({
        product: product,
        discription: discription
    })
    .then(()=> {
        console.log('product cteated to DB successfuly !!');
        res.redirect('/');
    })
    .catch((err) => {console.log(err)});
    
};

exports.shopDelete = (req, res) => {
    const prodcutId = req.body.checkBox
   Product.destroy(
      { where: {id: prodcutId}})
      .then(()=>console.log('itme deleted !!'))
   .catch((err) => console.log(err));
   
    res.redirect('/');
}


exports.shopGet = (req, res) => {

 Product.findAll().then((products)=> {
    res.render('shop.ejs', {productList: products}); 
    res.redirect('/');    
})

}

   
