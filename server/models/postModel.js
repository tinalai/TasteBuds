var db = require('../config/schema');
var Promise = require('bluebird');

require('./userModel');
require('./hashtagModel');
require('./restaurantModel');

var Post = db.Model.extend({
  tableName: 'posts',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo('User');
  },
  restaurant: function() {
    return this.hasOne('Restaurant');
  },
  hashtags: function() {
    return this.belongsToMany('Hashtag');
  }
});

module.exports = db.model('Post', Post);