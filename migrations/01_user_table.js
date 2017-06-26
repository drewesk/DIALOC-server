exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_table", function(table) {
    table.increments("id").primary();
    table.string("name");
    table.string("email").notNull();
    table.text("passwrod");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("user_table");
};
