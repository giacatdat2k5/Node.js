const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/CustomerController');
router.get('/', CustomerController.get);

router.post('/',CustomerController.post );

router.put('/', CustomerController.put);
router.delete('/:id', (req, res) => {
    let id = req.params.id;
  console.log(id);
  res.status(200).json({msg: `ID is ${id} `});
});
module.exports = router;