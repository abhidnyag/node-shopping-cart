var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Shopping');
var products = [
     new Product({
 imagePath: 'http://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/8/0/christianlouboutin-verylace-1180577_CM47_1_1200x1200_1508840055.jpg',
 title: 'Louboutin Shoes',
 description: 'Luxury retailer known for the designers red-soled shoes, plus handbags, wallets & select cosmetics.',
 price: 1115.96
}),
  new Product({
    imagePath: 'http://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/1/7/0/christianlouboutin-iriza-3170528_M908_1_1200x1200_1512035253.jpg',
    title: 'Louboutin Shoes',
    description: 'Luxury retailer known for the designers red-soled shoes, plus handbags, wallets & select cosmetics.',
    price:1100.63
   }),
   new Product({
    imagePath: 'http://images.us.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/1/6/1/christianlouboutin-biancabooty-3161197_BK01_1_1200x1200_1511941934.jpg',
    title: 'Louboutin Shoes',
    description: 'Luxury retailer known for the designers red-soled shoes, plus handbags, wallets & select cosmetics.',
    price: 1200
   }),
   new Product({
    imagePath: 'http://images.eu.christianlouboutin.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/8/0/christianlouboutin-sokate-1180003_BK01_1_1200x1200_1512116928.jpg',
    title: 'Louboutin Shoes',
    description: 'Luxury retailer known for the designers red-soled shoes, plus handbags, wallets & select cosmetics.',
    price: 1360.45
   }),
   new Product({
    imagePath: 'http://images.eu.christianlouboutin.com/media/catalog/product/cache/2/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/8/0/christianlouboutin-tresfrais-1180387_H121_1_1200x1200_1512118929.jpg',
    title: 'Louboutin Shoes',
    description: 'Luxury retailer known for the designers red-soled shoes, plus handbags, wallets & select cosmetics.',
    price: 1168.76
   })
];

var done = 0;
for(var i = 0; i< products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

