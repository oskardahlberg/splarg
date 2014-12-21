var toArray = require('./to-array');
var trim = require('./array/trim');

module.exports = function trimArguments (args__) {
  var args = toArray.apply(null, arguments);
  return trim(args);
};