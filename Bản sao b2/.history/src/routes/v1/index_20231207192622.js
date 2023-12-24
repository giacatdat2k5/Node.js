const express = require('express');
const router = express.Router();
const customer = require('./customer');

router.get('/', (req, res) => {
  res.status(200).json({msg:'bo dang chay'});
});

router.use('/customer',customer);

module.exports = router;