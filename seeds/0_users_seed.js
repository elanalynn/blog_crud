
exports.seed = function(knex, Promise) {
  return knex('comments').del()
  .then(function() {
    return knex('posts').del()
  }).then(function() {
    return knex('users').del()
  }).then(function() {
    return Promise.all([
      knex('users').insert({
        id: 1,
        first_name: 'Elana',
        last_name: 'Kopelevich',
        image_url: 'https://avatars1.githubusercontent.com/u/7654369?v=3&u=37da1d000847cf05ed91d9f1df339c3819e79a2b&s=140',
        bio: 'I enjoy riding bikes and painting.',
      }),
      knex('users').insert({
        id: 2,
        first_name: 'Roberto',
        last_name: 'Ortega',
        image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKAAAAAJDkwMWIzOTI1LTM2NGYtNGVlNy1iNzQ3LWEyNDAzZjhjNGE4ZQ.jpg',
        bio: 'I enjoy riding bikes and playing games.',
      }),
      knex('users').insert({
        id: 3,
        first_name: 'Danny',
        last_name: 'Fritz',
        image_url: 'https://avatars0.githubusercontent.com/u/315788?v=3&s=460',
        bio: 'I enjoy riding bikes and watching birds.',
      }),
      knex('users').insert({
        id: 4,
        first_name: 'Kyle',
        last_name: 'Coberly',
        image_url: 'https://avatars1.githubusercontent.com/u/1958931?v=3&s=150',
        bio: 'I enjoy riding bikes and playing guitar.',
      })
    ]);
  });
}
