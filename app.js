const express = require('express');
const bodyParser = require('body-parser');
const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');
const controlProduct = require('./controllers/products');
const path = require('path');
const ejs = require('ejs');
const productModule = require('./models/product');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');


app.use('/admin', routerAdmin);
app.use('/', routerShop);

// const productOne  = new productModule ('tv', 'LC 3000');
// console.log(productOne);




app.listen(3000, ()=> {console.log('connect to port 3000!')});
