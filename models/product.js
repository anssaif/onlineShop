const fs = require('fs');
const path = require('path');

const linkPath = path.join(__dirname, '../', 'data', 'product.json');


class Product {
    constructor(p, discription) {
        this.product = p;
        this.discription = discription;
    }
    save() {

        fs.readFile(linkPath, (err, findData) => {
            let products = [];
            if (err) {
                products.push(this);
            } else {
             products = JSON.parse(findData);
                products.push(this);
            }
            fs.writeFile(linkPath, JSON.stringify(products), (err) => {
                if (!err) {
                    console.log('writing file successfully !');
                }
            });

        });



    }
    static productAll(cb) {
        return  fs.readFile(linkPath, (err, findData) => {
            if(err) {
                cb([]);
            }else {
            cb(JSON.parse(findData));}
        });
    }
}





module.exports = Product;
