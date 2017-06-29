


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE location_table RESTART IDENTITY CASCADE;')

    .then(function () {
      // Inserts seed entries
      return knex('location_table').insert([
        {
          latitude: 100.43,
          longitude: 200.543,
          description: 'Cool spot'
        },
        {
          latitude: 300.04,
          longitude: 700.03,
          description: 'Dialocked in!'
        },
      ]);
    });
};
