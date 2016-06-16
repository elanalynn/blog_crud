
exports.seed = function(knex, Promise) {
  return knex('posts').del()
  .then(function() {
    return Promise.all([
      knex('posts').insert({
        id: 1,
        title: 'Ducks are Amazing',
        body: 'Ducks can fly, swim and walk. That\'s pretty sweet.',
        image_url: 'http://www.manitowoc.org/images/pages/N906//duck-picture%5B1%5D.jpg',
        user_id: 2,
      }),
      knex('posts').insert({
        id: 2,
        title: 'Painting for Fun',
        body: 'Painting is great. You can paint pictures of ducks.',
        image_url: 'https://img1.etsystatic.com/000/0/5151455/il_fullxfull.234866261.jpg',
        user_id: 1,
      }),
      knex('posts').insert({
        id: 3,
        title: 'Ska is Super',
        body: 'Do you like ska? I do',
        image_url: 'http://media.ents24network.com/image/000/082/319/e565920f77ec089990b2f7ba663ee110ab060230.jpg',
        user_id: 4,
      }),
      knex('posts').insert({
        id: 4,
        title: 'Top Ten Games',
        body: 'I\'ll tell you all about them when you click on the next page!',
        image_url: 'http://compass.xbox.com/assets/de/3a/de3ac3e9-9297-4d32-bb2e-1fe26cf3e6c0.jpg?n=GwG_Blade-back-compat_648x365.jpg',
        user_id: 3,
      })
    ]);
  });
}
