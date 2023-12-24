const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController');
const verifyToken = require('../../middlewares/VerifyToken')

const Joi = require('joi');

const productValidationSchema = Joi.object({
  productName: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
  }),
  producer: Joi.string().alphanum().required(),
  yearManufacture: Joi.number().min(2000).required(),
  amount: Joi.number().min(0).required(),
  price:Joi.number().min(0).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateProductData = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
        console.log(error);
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};
router.post('/',validateProductData,verifyToken, ProductController.create );
router.get('/',validateProductData,verifyToken,ProductController.getAll);
router.put('/:id',validateProductData,verifyToken,ProductController.update);
router.delete('/:id',validateProductData,verifyToken,ProductController.delete)

module.exports = router;