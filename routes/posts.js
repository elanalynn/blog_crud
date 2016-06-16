var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var comments = require('./comments');

router.use('/comments', comments);

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
  .join('posts', 'users.id', 'posts.user_id')
  .select()
  .then(function(records){
    res.render('posts', {
      title: 'The TMNT Blog',
      pageTitle: 'All Posts',
      posts: records
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('new', {
    title: 'The TMNT Blog',
    pageTitle: 'Write a New Post'
  });
});

router.get('/:id', function(req, res, next) {
  knex('users')
  .join('posts', 'users.id', 'posts.user_id')
  .select()
  .where('posts.id',req.params.id).first()
  .then(function(record){
    console.log(record);
    res.render('post', {
      title: 'The TMNT Blog',
      post: record
    });
  });
});

router.post('/', function(req, res, next) {
  knex('posts').insert({
    title: req.body.title,
    body: req.body.body,
    image_url: req.body.image_url,
    user_id: 1
  }, 'id').then(function(data){
    res.redirect('/posts');
  })
});

router.get('/:id/edit', function(req, res, next) {
  knex('posts')
  .where('id',req.params.id).first()
  .select()
  .then(function(record){
    res.render('edit', {
      title: 'The TMNT Blog',
      post: record
    });
  });
});


// PUT
router.post('/:id/edit', function(req, res, next) {
  console.log(req.body);
  knex('posts')
  .select()
  .where('id', req.params.id).first()
  .then(function(record){
    console.log('record', record);
    return knex('posts').update({
      title: req.body.title || record.title,
      body: req.body.body || record.body,
      image_url: req.body.image_url || record.image_url
    }).where('id', req.params.id);
  }).then(function(){
    res.redirect('/posts');
  })
});

router.delete('/:id/delete', function(req, res, next) {
  knex('posts').where('id', req.params.id).del();
  res.redirect('/');
});

module.exports = router;
