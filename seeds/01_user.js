const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
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
          }
        ]
        return knex('user').insert(users)
      })
};
