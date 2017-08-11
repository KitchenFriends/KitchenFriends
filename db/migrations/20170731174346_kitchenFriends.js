
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', table => {
      table.increments('id').unsigned().primary();
      table.string('username', 100);
      table.string('password');
      table.string('email', 100).nullable().unique();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('friendship', table => {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('friend_id').unsigned();
      table.foreign('friend_id').references('id').inTable('users').onDelete('cascade');
    }),
    knex.schema.createTableIfNotExists('user_favorites', table => {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('recipe_id').unsigned();
      table.foreign('recipe_id').references('id').inTable('recipes').onDelete('cascade');
    }),
    knex.schema.createTableIfNotExists('comments', table => {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      
      table.text('comment', 'longtext').nullable();
      table.integer('likes').unsigned().nullable();
    }),
    knex.schema.createTableIfNotExists('recipes', table => {
      table.increments('id').unsigned().primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('likes').unsigned().nullable();
      table.string('image', 200).nullable();
      table.text('directions', 'longtext').nullable();
    }),
    knex.schema.createTableIfNotExists('ingredients', table => {
      table.increments('id').unsigned().primary();

    }),
    knex.schema.createTableIfNotExists('quantities', table => {
      table.increments('id').unsigned().primary();
      table.integer('amount').nullable();

    }),
    knex.schema.createTableIfNotExists('measurements', table => {
      table.increments('id').unsigned().primary();
      table.string('unit', 100).nullable();
    })

  ])
};

exports.down = function(knex, Promise) {
   return Promise.all([
     knex.schema.dropTable('users'),
     knex.schema.dropTable('friendship'),
     knex.schema.dropTable('user_favorites'),
     knex.schema.dropTable('comments'),
     knex.schema.dropTable('recipes'),
     knex.schema.dropTable('ingredients'),
     knex.schema.dropTable('quantities'),
     knex.schema.dropTable('measurements')
    //   knex.raw('DROP TABLE users CASCADE;'),
    //   knex.raw('DROP TABLE friendship CASCADE;'),
    //   knex.raw('DROP TABLE user_favorites CASCADE;'),
    //   knex.raw('DROP TABLE comments CASCADE;'),
    //   knex.raw('DROP TABLE recipes CASCADE;'),
    //   knex.raw('DROP TABLE ingredients CASCADE;'),
    //   knex.raw('DROP TABLE quantities CASCADE;'),
    //   knex.raw('DROP TABLE measurements CASCADE;')
   ]);
};
