const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/CustomerController');
router.post('/',CustomerController.create );
router.get('/',CustomerController.getAll);
router.put('/:id',CustomerController.update);
router.delete('/:id', CustomerController.delete)
module.exports = router;