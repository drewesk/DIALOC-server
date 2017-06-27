const dotenv = require('dotenv')
dotenv.config();

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://localhost/dialoc_test_db"
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
