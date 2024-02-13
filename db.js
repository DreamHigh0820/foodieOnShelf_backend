require('dotenv').config();
const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "postgres",  
  // connectionString: process.env.POSTGRES_URL,
});

// const pool = new Pool({
//   user: "postgres",
//   password: "baka",
//   host: "localhost",
//   port: 5432,
//   database: "foodieonshelf",
// });

module.exports = pool;
