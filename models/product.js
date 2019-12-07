const product = [];

class Product {
    constructor (prduct, discription){
        this.prduct = prduct;
        this.discription = discription;
    }
    static productAll() {
       return  product;
    }

}
Product.productAll();

module.exports.Product = Product;
module.exports.prductAll = product;