
exports.up = function(knex, Promise) {
  return knex.schema.createTable("antipode_table", (table) => {

        table.integer("location_a_id").unsigned();
        table.foreign("location_a_id").references("location_table.id");
        table.integer("location_b_id").unsigned();
        table.foreign("location_b_id").references("location_table.id");
        table.boolean('favorite').notNullable().defaultTo(false);
        table.integer("user_id").unsigned();
        table.foreign("user_id").references("user.id");

    // table.integer("location_id").unsigned();
    // table.foreign("location_id").references("location_table.id")
    //
    //
    // table.boolean('favorite')
    //      .notNullable()
    //     .defaultTo(false);
    //
    // table.integer("user_id").unsigned();
    // table.foreign("user_id").references("user.id");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("antipode_table");
};
