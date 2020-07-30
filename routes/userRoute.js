const express = require('express');
const productController = require('../controllers/productController');//controller
const userController = require('../controllers/userController');//userController

const router =express.Router();

router.get('/',productController.index);//productController
router.get('/login',userController.getAddUser);
router.post('/login',userController.addProduct);

module.exports=router;