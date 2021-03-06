
exports.up = function(knex, Promise) {
  return knex.schema.createTable("location_table", function(table) {
    table.increments("id").primary();
    table.float("latitude").notNullable();
    table.float("longitude").notNullable();
    table.text("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("location_table");
};
