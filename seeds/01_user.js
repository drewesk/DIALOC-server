
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE user_table RESTART IDENTITY CASCADE;')

    .then(function () {
      // Inserts seed entries
      return knex('user_table').insert([
        {
          name: "Raziel",
          email: 'raziel@ra.com',
          passwrod: "123456",
        },
        {
          name: "Kain",
          email: 'kain@ka.com',
          passwrod: "123456",
        },
      ]);
    });
};
