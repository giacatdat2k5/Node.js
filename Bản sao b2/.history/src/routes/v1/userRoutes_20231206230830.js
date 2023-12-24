const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  res.status(200).json({msg: `ID is ${id} `});
});

module.exports = router;