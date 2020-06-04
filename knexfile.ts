import path from 'path';
require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    port: process.env.DB_PORT,
    host:  process.env.DB_HOST,
    user:  process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
};
