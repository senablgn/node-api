'use strict';

const Customer = require("../entities/Customer");


const customerService=require("../service/CustomerService")

function createCustomer(createRequest,createCustomerResponseResponse) {

    console.log("x")
    
    const {id,nationalId,firstName,lastName,password,email}=createRequest.body;

    const createdCustomer=new Customer(id,nationalId,firstName,lastName,password,email);

    console.log(customerService);
    customerService.createCustomer(createdCustomer);
    createCustomerResponseResponse.json({"message":"Customer created"});
}
module.exports={createCustomer}


function getCustomerById(request, response) {
    const { id } = request.params;

    customerService.getCustomerById(id)
        .then(customer => {
            if (customer) {
                response.json(customer);
            } else {
                response.status(404).json({ message: "Customer not found" });
            }
        })
        .catch(err => {
            console.error(err);
            response.status(500).json({ message: "Internal server error" });
        });
}

module.exports = { createCustomer, getCustomerById }
