const Product = require('../models/Product');

class ProductService {
    create = async (dataProduct) =>{
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const product = new Product(dataProduct);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }
    getAll = async () =>{
        try {
          const product = await Product.find();
          return product;
        } catch (error) {
            throw error;
        }
    }
    update = async (id,dataProduct) =>{
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const result = await Product.updateOne({_id:id},{productName:dataProduct.productName});
            return true;
        } catch (error) {
            throw error;
        }
    }
    delete = async (id) =>{
        try {
            const product = await Product.findById(id);
            console.log(product)
            await product.deleteOne();
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductService();