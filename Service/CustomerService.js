'use strict';

const db=require("../repository/CustomerRepository");
const repository=require("../repository/CustomerRepository");




 async function createCustomer({nationalId,firstName,lastName,email,phoneNumber}) {
  return await  repository.createCustomer({nationalId,firstName,lastName,email,phoneNumber});
}




 async function getCustomerById(id) {
   return await repository.getCustomerById(id);
}

async function getCustomerByName(firstName) {
   return await repository.getCustomerByName(firstName);
}



 function updateCustomer(id,field,value) {

   return repository.updateCustomer(id,field ,value);

}


 function deleteCustomer(id) {
 return repository.deleteCustomer(id);
}

function getAllUsers() {
    return repository.getAllUsers();
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllUsers,getCustomerByName}