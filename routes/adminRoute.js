const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');//controller 

 router.post('/add-product',productController.addProduct);
 router.get('/all-product',productController.index)
 router.put('/update-product/:productId',productController.updateProduct);
 router.delete('/delete-product/:productId',productController.deleteProduct);
 //module.exports =router;
 module.exports =router;


 