var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var comments = require('./comments');

router.use('/comments', comments);

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('posts').select().then(function(rows){
    res.render('posts', {
      title: 'All Posts',
      posts: rows
    });
  })
});

router.get('/:id', function(req, res, next) {
  knex('posts').select().where('id', req.params.id).then(function(row){
    res.render('posts', {
      title: 'All Posts',
      post: row
    });
  })
});

router.get('/new', function(req, res, next) {
  res.render('new', {title: 'Write a New Post'});
});

router.post('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/:id/edit', function(req, res, next) {
  res.render('edit', {title: 'edit'});
});

router.put('/:id', function(req, res, next) {
  res.redirect('/');
});

router.delete('/:id', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
