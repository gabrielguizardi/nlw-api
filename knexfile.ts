import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    port: 5432,
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'nlw',
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
};
