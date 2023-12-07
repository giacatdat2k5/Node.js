const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id);
//   res.status(200).json({msg: `ID is ${id} `});
// });

router.get('/', (req, res) => {
  const {page,sort} = req.query;
  console.log(page,sort);
  res.status(200).json({msg: `get id string `});
});

router.post('/', (req, res) => {
  const {infor,price} =req.body;
  console.log(infor,price);
  res.status(200).json({
    infor,
    price
  });
});
router.put('/', (req, res) => {
  const {infor,price} =req.body;
  console.log(infor,price);
  res.status(200).json({
    infor,
    price
  });
});
router.delete('/:id', (req, res) => {
    let id = req.params.id;
  console.log(id);
  res.status(200).json({msg: `ID is ${id} `});
});
module.exports = router;