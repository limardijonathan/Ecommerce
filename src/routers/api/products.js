const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

router.get('/products', productAPIController.list)
router.get('/products/:id', productAPIController.detail)


module.exports = router

