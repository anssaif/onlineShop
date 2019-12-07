const express = require('express');
const path = require('path');
const product = require('../controllers/products').shopGet;


const router = express.Router();

router.get('/', product);

module.exports = router;