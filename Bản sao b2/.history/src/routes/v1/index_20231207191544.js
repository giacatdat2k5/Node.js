const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');
const customer = require('./customer');

router.get('/', (req, res) => {
  res.status(200).json({msg:'bo dang chay'});
});

router.use('/user',userRouter);
router.use('/custumer',customer);

module.exports = router;