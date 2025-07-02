'use strict';

const express=require("express");
const router=express.Router();
const customersController = require("../controllers/CustomersController");


router.post('/customer',customersController.createCustomer)

module.exports=router;

router.get('/customer/:id', customersController.getCustomerById);
