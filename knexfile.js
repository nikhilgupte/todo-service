// Update with your config settings.

const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'db');

const migrations = {
      tableName: 'knex_migrations',
      directory: path.join(BASE_PATH, 'migrations')
    }

module.exports = {

  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    },
    migrations
  },

  development: {
    client: 'postgresql',
    connection: {
      database: 'todo',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations
  }

};
