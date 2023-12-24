const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')

router.get('/status', (req, res) => {
  res.status(200).json({msg:'bo dang chay'});
});

router.use('/user',userRoutes);
module.exports = router;