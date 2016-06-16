

exports.seed = function(knex, Promise) {
  return knex('comments').del()
  .then(function() {
    return Promise.all([
      knex('comments').insert({
        id: 1,
        body: 'Ducks are stupid. I\'m a jerk',
        user_id: 1,
        post_id: 1
      }),
      knex('comments').insert({
        id: 2,
        body: 'You\'re painting sux.',
        user_id: 1,
        post_id: 2
      })
    ]);
  });
}
