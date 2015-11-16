var Post = require('../../models/postModel.js');
var collection = require('../../collections/posts.js');
var db = require('../config/schema.js');
var knex = require('knex');
var bookshelf = require('bookshelf');
var Promise = require('bluebird');

module.exports = {
  getAllPosts: function(req, res, next) {
    db.collection('Posts')
      .fetchAll(Posts)
      .then(fucntion(post) {
        res.json(post);
      })
      .next();
  },

  createPost: function(req, res, next) {
    db.model('Post')
      .newPost({
        {
          eat: req.body.eat,
          image: req.body.image,
          comment: req.body.comment,
          location: req.body.location,
          }
      })
      .save()
      .then(function(post) {
        res.send(post);
      })
      .next();
  },

  deletePost: function(req. res, next) {
    db.model('Post')
      .query({where: {id:'req.params.id'}})
      .then(function(response) {
        res.sendStatus(200);
      })
      .next();
  },

  getOnePost: function(req, res next) {
    db.model('Post')
      .query({where: {id:'req.params.id'}})
      .fetch()
      .then(function(post) {
        res.send(post);
      })
      .next();
  }

}
