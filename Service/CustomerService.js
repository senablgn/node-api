'use strict';

const db=require("../repository/CustomerRepository");
const repository=require("../repository/CustomerRepository");




 async function createCustomer({id,nationalId,firstName,lastName,password,email}) {
  return await  repository.createCustomer(id,nationalId,firstName,lastName,password,email);
}




 async function getCustomerById(id) {
   return await repository.getCustomerById(id);
}




 function updateCustomer(id,change) {

   return repository.updateCustomer(id,change);

}


 function deleteCustomer(id) {
 return repository.deleteCustomer(id);
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer}