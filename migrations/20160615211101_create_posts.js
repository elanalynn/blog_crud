
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.string('title');
    table.text('body');
    table.string('image_url');
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
