const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;')
  .then(() => {
        const users = [
          {
            id: 1,
            name: 'Rob',
            email: 'berto.ort@gmail.com',
            password: bcrypt.hashSync('pineapple'),
            created_at: new Date()
          },
          {
            id: 2,
            name: 'CJ',
            email: 'hello@cjr.co.de',
            password: bcrypt.hashSync('keyboard_cat'),
            created_at: new Date()
          },
          {
            id: 3,
            name: 'testing',
            email: 'test@test.com',
            password: bcrypt.hashSync('testpass'),
            created_at: new Date()
          }
        ]
        return knex('user').insert(users)
      })
};
