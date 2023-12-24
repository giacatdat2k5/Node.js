const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User dcmm');
});

module.exports = router;