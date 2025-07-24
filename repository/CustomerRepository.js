const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres_users',  
    password: '5285',
    port: 5433,
});

module.exports = db;



async function createCustomer({firstName,lastName,email,phoneNumber,course}) {
const query = 'INSERT INTO users (first_name, last_name, email,phone_number,courses_of_interest) VALUES ($1, $2, $3, $4,$5) RETURNING *';
    const values = [firstName,lastName,email,phoneNumber,course];
    const result = await db.query(query, values);
    return result.rows[0];
}




async function getCustomerById(id) {
    const query = 'SELECT * FROM users WHERE id = $1 ;';
    const values = [id];
    const result = await db.query(query, values);
    return result.rows[0]; 
}


async function getCustomerByName(firstName) {
    const query = 'SELECT * FROM users WHERE first_name = $1 ;';
    const values = [firstName];  ////////

    const result = await db.query(query, values);
    return result.rows; 
}



async function updateCustomer(id,field,value) {
  let query = `UPDATE users SET ${field} = $1 WHERE id = $2 RETURNING *;`;

    
    let values=[value,id];
    const result=await db.query(query,values);
    return result.rows[0];


}


async function deleteCustomer(id) {
    let query='delete from users where id=$1 RETURNING *;';
    let value=[id];
    const result=await db.query(query,value);
    return result.rows[0];
}


async function getAllUsers() {
    const query = 'SELECT * FROM users;';
    const result = await db.query(query);
    return result.rows;
}


async function addCourseToUser(userId, courseName) {
  const query = `
    UPDATE users
    SET courses_of_interest = array_append(courses_of_interest, $1)
    WHERE id = $2;
  `;
  await db.query(query, [courseName, userId]);
}



module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllUsers,getCustomerByName,addCourseToUser}
