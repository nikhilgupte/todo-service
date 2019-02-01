
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', (table) => {
    table.uuid('id').defaultTo(knex.raw("uuid_generate_v4()"));
    table.string('message').notNullable();
    table.boolean('completed').notNullable();
  });  
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('todos');
};
