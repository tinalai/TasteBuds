var db = require('../config/schema');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users'
});

module.exports = db.model('User', User);