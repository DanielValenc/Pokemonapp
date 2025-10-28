const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',     // user
  host: 'pokedesk-n000.onrender.com',
  database: 'pokemon_db', // DB
  password: '1234',
  port: 5432,
});

module.exports = pool;
