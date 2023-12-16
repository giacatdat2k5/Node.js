const express = require('express');
const router = express.Router();
const customer = require('./customer');
const product = require('./product')
const UserRoutes = require('./userRoutes')
router.use('/customer',customer);
router.use('/product',product);
router.use('/user',UserRoutes);
module.exports = router;