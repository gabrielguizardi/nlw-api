import knex from 'knex';

const connection = knex({
  client: 'pg',
  connection: {
    port: Number(process.env.DB_PORT),
    host:  process.env.DB_HOST,
    user:  process.env.DB_USERNAME,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME,
  },
});

export default connection;
