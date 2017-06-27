const knex = require("../connection");

module.exports = {
  getAll: function() {
    return knex("user");
  },

  getAntipodes: function() {
    return knex("antipode_table")
    .join("location_table", "location_a_id", "location_table.id")
    .select("*");
  },

  getLocations: function() {
    return knex("location_table");
  },

  createAntipode: (id, reqBody) => {
    return knex('location_table').insert({ latitude: reqBody.latitude, longitude: reqBody.longitude, description: reqBody.description },
       "*").then( function (testResult) {
         return testResult;
       });
  }

}
