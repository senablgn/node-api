'use strict';

const db=require("../repository/CustomerRepository");
const repository=require("../repository/CustomerRepository");




 async function createCustomer({firstName,lastName,email,phoneNumber,course}) {
  return await  repository.createCustomer({firstName,lastName,email,phoneNumber,course});
}


async function addCourse(userId, courseName) {
 
  return await repository.addCourseToUser(userId, courseName);
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

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllUsers,getCustomerByName,addCourse}