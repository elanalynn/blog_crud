
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.text('body');
    table.integer('user_id').unsigned().references('id').inTable('users');
    table.integer('post_id').unsigned().references('id').inTable('posts');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
