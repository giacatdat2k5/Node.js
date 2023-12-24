const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   console.log(id);
//   res.status(200).json({msg: `ID is ${id} `});
// });

router.get('/test', (req, res) => {
  const {page,sort} = req.query;
  console.log(page,sort);
  res.status(200).json({msg: `get id string `});
});

router.post('/', (req, res) => {
  const {username,password} =req.body;
  
  res.status(200).json({
    username,
    password
  });
});
module.exports = router;