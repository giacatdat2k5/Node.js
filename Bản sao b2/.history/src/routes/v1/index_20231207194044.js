const express = require('express');
const router = express.Router();
const customer = require('./customer');
const product = require('./product')

router.get('/', (req, res) => {
  res.status(200).json({msg:'bo dang chay'});
});

router.use('/customer',customer);
router.use('/product',product);

module.exports = router;