// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'root',
      password: 'password',
      database: 'kitchenFriends'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations'
    }
  }
}
// module.exports = {

//   development: {
//     client: 'postgresql',
//     connection: {
//       database: 'kitchenFriends',
//       user: 'postgres',
//       password: 'postgres'
//       // host: 'localhost',
//       // port: 3000
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
