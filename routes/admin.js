const express = require('express');
const path = require('path');
const controlItem = require('../controllers/products');
const router = express.Router();


router.get('/add-product', controlItem.adminItemGet);


router.post('/item', controlItem.adminItemPost);


module.exports = router ;
