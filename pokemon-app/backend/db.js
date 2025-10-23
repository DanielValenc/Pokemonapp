const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',     // tu usuario
  host: 'localhost',
  database: 'pokemon_db', // tu base creada
  password: '1234',
  port: 5432,
});

module.exports = pool;
