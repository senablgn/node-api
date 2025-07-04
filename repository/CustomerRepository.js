const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',  
    password: '5285',
    port: 5433,
});

module.exports = db;



async function createCustomer({id,nationalId,firstName,lastName,password,email}) {
const query = 'INSERT INTO customers (id, national_id, first_name, last_name, password, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
;
    const values = [id,nationalId,firstName,lastName,password,email];
    const result = await db.query(query, values);
    return result.rows[0];
}




async function getCustomerById(id) {
    const query = 'SELECT * FROM customers WHERE id = $1 ;';
    const values = [id];

    const result = await db.query(query, values);
    return result.rows; 
}




async function updateCustomer(id,field,value) {
  let query = `UPDATE customers SET ${field} = $1 WHERE id = $2 RETURNING *;`;

    
    let values=[value,id];
    const result=await db.query(query,values);
    return result.rows[0];


}


async function deleteCustomer(id) {
    let query='delete from customers where id=$1 RETURNING *;';
    let value=[id];
    const result=await db.query(query,value);
    return result.rows[0];
}


async function getAllCustomers() {
    const query = 'SELECT * FROM customers;';
    const result = await db.query(query);
    return result.rows;
}


module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllCustomers}
