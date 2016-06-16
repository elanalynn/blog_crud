var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('posts', {title: "All Posts"});
});

router.get('/:id', function(req, res, next) {
  res.render('index', {title: 'home'});
});

router.get('/new', function(req, res, next) {
  res.render('new', {title: 'new'});
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
