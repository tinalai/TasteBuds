var db = require('../config/schema');
var Promise = require('bluebird');

require('../models/postModel');

var Posts = db.Collection.extend({
  model: db.model('Post')
}, {
  fetchByUser: function(userId) {
    return db.collection('Posts')
      .forge()
      .query(function(qb) {
        qb.where('user_id', '=', userId);
      })
      .fetch();
  }
});

module.exports = db.collection('Posts', Posts);