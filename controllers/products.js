// const product = [{}];
const productModule = require('../models/product');
const path = require('path');
const fs = require('fs');

const linkPath = path.join(__dirname, '../', 'data', 'product.txt'); 
const itemList = productModule.prductAll;


exports.adminItemGet = (req, res) => {

    res.render('add-product.ejs');
    
};

exports.adminItemPost = (req, res)=> {

     const  prd = req.body.productName;
     const   dis = req.body.productDiscription;
   
  const productItem = new productModule.Product(prd, dis);
  const productItemJson = JSON.stringify(productItem);
  itemList.push(productItem);

  fs.appendFile(linkPath, productItemJson, (err) => {
      if(err) {
          console.log(err);
          }else {
              console.log('successfuly write to file!!');
          }
  });


  res.redirect('/');
  };




exports.shopGet =  (req, res)=> {

    res.render('shop.ejs', {productList: itemList});
}


// exports.productAdmin = product;