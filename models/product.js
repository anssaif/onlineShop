const fs = require('fs');
const path = require('path');
const newId = require('uniqid');

const linkPath = path.join(__dirname, '../', 'data', 'product.json');


class Product {
    constructor(p, discription) {
        this.product = p;
        this.discription = discription;
    }
    save() {
        this.id = newId();
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
    };
    static findById (list, itemId) {
       return list.find( item => item.id === itemId );
    };
    
};





module.exports = Product;
