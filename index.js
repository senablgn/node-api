'use strict';

const express = require("express");
const app = express();
const customersController = require("./controllers/CustomersController");


app.use(express.json());    

app.post('/customer', customersController.createCustomer);
app.get('/customer/:id', customersController.getCustomerById);
app.put('/customer/update/:id',customersController.updateCustomer);
app.delete('/customer/delete/:id',customersController.deleteCustomer);

app.listen(3000, () => {
    console.log("Server is running ");
});
