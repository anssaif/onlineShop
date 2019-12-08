const express = require('express');
const path = require('path');
const product = require('../controllers/products');


const router = express.Router();


router.get ('/:productId', product.getProductById);



router.get('/', product.shopGet);

module.exports = router;