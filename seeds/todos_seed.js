
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {message: 'typescript tutorial', completed: false},
        {message: 'react tutorial', completed: false},
        {message: 'redix tutorial', completed: false}
      ]);
    });
};
