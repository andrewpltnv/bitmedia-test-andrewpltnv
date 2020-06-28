const path = require('path');

const dbPath = path.resolve(__dirname, 'db/database.sqlite');

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
});


knex.schema.hasTable('users')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (table)  => {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('gender');
        table.string('ip_address');
      })
        .then(() => console.log('Table \'Users\' created'))// Log success message
        .catch((error) => console.error(`There was an error creating table: ${error}`));
    }
  })
  .then(() => console.log('done users'))// Log success message
  .catch((error) => console.error(`There was an error setting up the database: ${error}`));

knex.schema.hasTable('users_statistic')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users_statistic', (table)  => {
        table.integer('user_id').primary();
        table.string('date');
        table.integer('page_views');
        table.integer('clicks');
      })
        .then(() => console.log('Table \'Users_statistic\' created'))// Log success message
        .catch((error) => console.error(`There was an error creating table: ${error}`));
    }
  })
  .then(() => console.log('done stats'))// Log success message
  .catch((error) => console.error(`There was an error setting up the database: ${error}`));

// Log all data in "users" table
knex.select('*').from('users')
  .then(data => console.log('data:', data.length))
  .catch(err => console.log(err));// Export the database
module.exports = knex;
