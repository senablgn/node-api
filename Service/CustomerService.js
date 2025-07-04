'use strict';

const db=require("../repository/CustomerRepository");
const repository=require("../repository/CustomerRepository");




 async function createCustomer({id,nationalId,firstName,lastName,password,email}) {
  return await  repository.createCustomer({id,nationalId,firstName,lastName,password,email});
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

function getAllCustomers() {
    return repository.getAllCustomers();
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllCustomers,getCustomerByName}