
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE location_table RESTART IDENTITY CASCADE;')

    .then(function () {
      // Inserts seed entries
      return knex('location_table').insert([
        {
          latitude: 100,
          longitude: 200,
        },
        {
          latitude: 300,
          longitude: 700,
        },
      ]);
    });
};
