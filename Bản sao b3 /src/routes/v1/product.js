const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController');
router.get('/', ProductController.get );

router.post('/', ProductController.post);

router.put('/', ProductController.put );

router.delete('/:id', ProductController.delete);
module.exports = router;