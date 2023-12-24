
const ProductService = require('../services/ProductService');


class ProductController {
    create = async (req, res, next) =>{
        try {
            const {productName,producer,yearManufacture,amount,price} = req.body;
            // Gọi đến tầng service để xử lý
            let dataProduct = {
                productName,
                producer,
                yearManufacture,
                amount,
                price
            }
            const product = await ProductService.create(dataProduct);

            res.status(200).json({
                product
            })

        } catch (error) {
            next(error)
        }
    }
    getAll = async (req, res, next) =>{
        try {
        const product = await ProductService.getAll();

        res.status(200).json({
            product
        })
        } catch (error) {
            next(error)
        }
    }
    update = async (req, res, next) =>{
        try {
            const {productName,producer,yearManufacture,amount,price} = req.body;
            const {id} = req.params;
            // Gọi đến tầng service để xử lý
            let dataProduct = {
                productName,
                producer,
                yearManufacture,
                amount,
                price
            }
            const result = await ProductService.update(id, dataProduct);
            if (result){
                res.status(200).json({'mgs':'Updated'})
            }else{
                throw new Error('Update fail')
            }
        } catch (error) {
            next(error)
        }
    }
    delete = async (req, res, next) =>{
        try {
            const {id} = req.params;
            const result = await ProductService.delete(id);
            if (result){
                res.status(200).json({'mgs':'Deleted'})
            }else{
                throw new Error('Deleted fail')
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ProductController();