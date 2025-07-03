'use strict';

const Customer = require("../entities/Customer");


const customerService=require("../service/CustomerService")

function createCustomer(createRequest,createCustomerResponseResponse) {
    const {id,nationalId,firstName,lastName,password,email}=createRequest.body;
    console.log("x")
    const createdCustomer=new Customer(id,nationalId,firstName,lastName,password,email);

    console.log(customerService);
    customerService.createCustomer(createdCustomer);
    createCustomerResponseResponse.json({"message":"Customer created"});
}



function getCustomerById(request, response) {
    const { id } = request.params;
    console.log("x")

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



function updateCustomer(request,response) {
    const {password}=request.body;
    const {id}=request.params;
    customerService.updateCustomer(id,password).then(customer => {
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


function deleteCustomer(request,response) {
    const {id}=request.params;
    customerService.deleteCustomer(id).then(customer=>{
        if(customer){
            response.json('customer deleted',customer);
        }else{
            response.status(404).json({message:"Customer not found"})
        }
    })
    .catch(error=>{
        console.error(error);
        response.status(500).json({message:"Server Error"});
    });

}
1

function getAllCustomers() {
    return customerService.getAllCustomers();
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllCustomers}
