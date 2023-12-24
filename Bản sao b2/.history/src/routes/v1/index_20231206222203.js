const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');

router.get('/status', (req, res) => {
  res.status(200).json({msg:'bo dang chay'});
});

router.use('/users', userRouter)

module.exports = router;