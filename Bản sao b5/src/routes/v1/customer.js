const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/CustomerController');
const verifyToken = require('../../middlewares/VerifyToken')

const Joi = require('joi');

const customerValidationSchema = Joi.object({
    username: Joi.string().alphanum().required().messages({
        'any.required': `"username" không được bỏ trống !`
      }),
      email: Joi.string().email().required(),
      phone: Joi.string().min(10).max(10).required(),
      birthYear:Joi.number().min(0).required(),
      sex: Joi.string().alphanum().required(),
      address:Joi.string().alphanum().required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateCustomertData = (req, res, next) => {
    const { error, value } = customerValidationSchema.validate(req.body, {abortEarly: false});
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
router.post('/', validateCustomertData,verifyToken, CustomerController.create );
router.get('/',validateCustomertData,verifyToken,CustomerController.getAll);
router.put('/:id',validateCustomertData,verifyToken,CustomerController.update);
router.delete('/:id',validateCustomertData,verifyToken,CustomerController.delete)
module.exports = router;