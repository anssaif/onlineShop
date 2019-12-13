const express = require('express');
const bodyParser = require('body-parser');
const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');
const controlProduct = require('./controllers/products');
const Sequelize = require('sequelize');
const ejs = require('ejs');
const productModule = require('./models/product');
const app = express();


const sequelize = require('./database/dataBase');









app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.set('view engine', 'ejs');


app.use('/admin', routerAdmin);
app.use('/', routerShop);


sequelize.sync()
.then(
    app.listen(3000, ()=> {console.log('connect to port 3000!')})
)
.catch(
    (err) => {console.log(err);
    }
)



