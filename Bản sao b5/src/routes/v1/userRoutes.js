const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');
const verifyToken = require('../../middlewares/VerifyToken')

const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
  }),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  phone: Joi.string().min(10).max(10).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateUserData = (req, res, next) => {
    const { error, value } = userValidationSchema.validate(req.body, {abortEarly: false});
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

router.post('/',validateUserData,verifyToken,UserController.create );
router.get('/',validateUserData,verifyToken, UserController.getAll );
router.put('/:id',validateUserData,verifyToken, UserController.update );
router.delete('/:id',validateUserData,verifyToken, UserController.delete)
module.exports = router;