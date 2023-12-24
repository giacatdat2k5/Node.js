const express = require('express');
const router = express.Router();
const index = require('./index'); 

router.get('/', (req, res) => {
  res.send('User dcmm');
});
 
router.use('/status',index)
module.exports = router;