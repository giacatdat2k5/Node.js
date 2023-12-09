const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');
router.get('/', UserController.get );

router.post('/', UserController.post);

router.put('/', UserController.put );

router.delete('/:id', UserController.delete);
module.exports = router;