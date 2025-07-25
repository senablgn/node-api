// init-db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres_users',
    password: '5285',
    port: 5433,
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) ,
    phone_number VARCHAR(10),
    session_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createTable = async () => {
    try {
        await pool.query(createTableQuery); // düzeltildi
        console.log(" Users tablosu başarıyla oluşturuldu ya da zaten mevcut.");
    } catch (error) {
        console.error(" Tablo oluşturulurken hata oluştu:", error);
    }
};

module.exports = {
    createTable,
    pool
};

