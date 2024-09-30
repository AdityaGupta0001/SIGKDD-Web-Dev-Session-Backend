const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.post('/products/add-product', mainController.addProduct)
router.get('/products/get-products', mainController.getProducts)
router.get('/products/get-product/:id', mainController.getProductById)
router.put('/products/update-product/:id', mainController.updateProduct)
router.delete('/products/delete-product/:id', mainController.deleteProduct)

module.exports = router;