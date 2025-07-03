'use strict';

const express = require("express");
const app = express();
const customersController = require("./controllers/CustomersController");

app.use(express.json());

app.post('/customer', customersController.createCustomer);
app.get('/customer/:id', customersController.getCustomerById);

app.listen(3000, () => {
    console.log("Server is running ");
});
