'use strict';

const db=require("../repository/CustomerRepository");


async function createCustomer({id,nationalId,firstName,lastName,password,email}) {
const query = 'INSERT INTO customers (id, national_id, first_name, last_name, password, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
;
    const values = [id,nationalId,firstName,lastName,password,email];
    const result = await db.query(query, values);
    return result.rows[0];
}




async function getCustomerById(id) {
    const query = 'SELECT * FROM customers WHERE id = $1';
    const values = [id];

    const result = await db.query(query, values);
    return result.rows[0]; 
}




async function updateCustomer(id,change) {
    let query='UPDATE customers SET password = $1 WHERE id = $2 RETURNING *;';
    let values=[change,id];
    const result=await db.query(query,values);
    return result.rows[0];


}


async function deleteCustomer(id) {
    let query='delete from customers where id=$1 RETURNING *;';
    let value=[id];
    const result=await db.query(query,value);
    return result.rows[0];
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer}