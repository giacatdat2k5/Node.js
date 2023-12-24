const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');

router.get('/cc', (req, res) => {
  res.status(200).json({msg:'bo dang chay'});
});

router.use('/user',userRouter)

module.exports = router;