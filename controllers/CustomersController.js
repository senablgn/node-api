'use strict';

const Customer = require("../entities/Customer");


const customerService=require("../service/CustomerService")

function createCustomer(createRequest,createCustomerResponseResponse) {
    const {id,nationalId,firstName,lastName,password,email}=createRequest.body;
    
    const createdCustomer=new Customer(id,nationalId,firstName,lastName,password,email);

  
    customerService.createCustomer(createdCustomer);
    createCustomerResponseResponse.json({"message":"Customer created"});
}



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

function getCustomerByName(request,response) {
    const firstName=request.query.firstName;

    customerService.getCustomerByName(firstName).then(customer=>{
        if(customer){
            response.json({"customers listed ":customer})
        }else{
            response.status(404).json({message:"customer not found"});
        }
    }).catch(error=>{
        console.log(error);
        response.status(500).json({message:"Internal server error"})
    });
}




function updateCustomer(request,response) {
    const {field,value}=request.body;
    
    const {id}=request.params;
    customerService.updateCustomer(id,field,value).then(customer => {
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

function getAllCustomers(request,response) {
    return  customerService.getAllCustomers().then(customer=>{
        if(customer){
            response.json({"customers listed ":customer});
        }
        else{
            response.status(404).json({"error":"Empty List"})
        }
        
    }).catch(error=>{
        console.error(error);
        response.status(500).json({message:"Server Error"});
    });
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllCustomers,getCustomerByName}
