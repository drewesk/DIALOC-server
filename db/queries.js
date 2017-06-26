const knex = require("./connection");

module.exports = {
  getAll: function() {
    return knex("user");
  }
}
