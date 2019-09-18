
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'alikoD',password:'sugar'},
        {username: 'mikeA',password:'oil'},
        {username: 'robertS',password:'equity'}
      ]);
    });
};
