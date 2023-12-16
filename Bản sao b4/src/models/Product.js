const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  producer: { type: String, required: true },
  yearManufacture:{ type:Number, required:true},
  amount:{ type:Number, required:true},
  price:{ type:Number, required:true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
