import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    port: 5432,
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'nlw',
  },
});

export default connection;
