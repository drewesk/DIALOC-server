
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE antipode_table RESTART IDENTITY CASCADE;')

    .then(function () {
      // Inserts seed entries
      return knex('antipode_table').insert([
        {
          location_a_id: 1,
          location_b_id: 1,
          user_id: 1
        },
        {
          location_b_id: 2,
          location_a_id: 2,
          user_id: 2
        }
      ]);
    });
};
