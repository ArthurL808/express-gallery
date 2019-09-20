
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'johnB',password:'ledzeplin'},
        {username: 'keithM',password:'theWho'},
        {username: 'gingerB',password:'cream'}
      ]);
    });
};
