const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',  
    password: '5285',
    port: 5432,
});

module.exports = db;
