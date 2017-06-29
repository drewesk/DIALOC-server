const knex = require("../connection");

module.exports = {
  getAll: function() {
    return knex("user")
    .distinct('id', 'name', 'email', 'is_active');
  },

  getAntipodes: function() {
    return knex("antipode_table")
    .join("location_table", "location_id", "location_table.id")
    .select("*");
  },

  getLocations: function() {
    return knex("location_table");
  },

  createAntipode: (id, reqBody) => {
    return knex('location_table').insert({ latitude: reqBody.latitude, longitude: reqBody.longitude, description: reqBody.description },
       "*").then( function (locationData) {
         return knex('antipode_table').insert({
           user_id: id,
           location_id: locationData[0].id,
         }, "*").then( function(antipodeData) {
           return antipodeData;
         });
       });
  },

  getUserAntipodes : function (id) {
    return knex("antipode_table")
    .join("location_table", "location_id", "location_table.id")
    .select("*").where("antipode_table.user_id", id)
 }

}
