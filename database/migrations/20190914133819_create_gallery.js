
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gallery',(table)=>{
      table.increments()
      table.string('author')
      table.string('link')
      table.string('description')
      table.integer('user_id').references('id').inTable('users')
      table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gallery')
};
