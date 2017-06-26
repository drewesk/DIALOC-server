
exports.up = function(knex, Promise) {
  return knex.schema.createTable("location_table", function(table) {
    table.increments("id").primary();
    table.integer("latitude").notNull();
    table.integer("longitude").notNull();
    table.integer("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("location_table");
};
