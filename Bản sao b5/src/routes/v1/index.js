const express = require('express');
const router = express.Router();
const customer = require('./customer');
const product = require('./product')
const UserRoutes = require('./userRoutes')
const authRouter = require('./authRoute')

router.use('/customer',customer);
router.use('/product',product);
router.use('/user',UserRoutes);
router.use('/auth',authRouter);
module.exports = router;