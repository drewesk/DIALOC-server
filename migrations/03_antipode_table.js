
exports.up = function(knex, Promise) {
  return knex.schema.createTable("antipode_table", function(table) {
    table.increments("id").primary();
    table.integer("location_a_id").unsigned();
    table.foreign("location_a_id").references("location_table.id")
    table.integer("location_b_id").unsigned();
    table.foreign("location_b_id").references("location_table.id")
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user_table.id")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("location_table");
};
