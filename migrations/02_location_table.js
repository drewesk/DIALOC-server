
exports.up = function(knex, Promise) {
  return knex.schema.createTable("location_table", (table) => {

    table.increments("id").primary();
    table.float("latitude").notNullable();
    table.float("longitude").notNullable();
    table.text("description").notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("location_table");
};
