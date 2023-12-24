const express = require('express');
const customer = express.Router();

customer.get('/', (req, res) => {
    res.status(200).json({msg: `get id string `});
  });

  module.exports=customer;