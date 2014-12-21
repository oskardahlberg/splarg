var toArray = require('./to-array');
var splitCallback = require('./array/splitCallback');

module.exports = function splitArgumentsCallback (args__) {
  var args = toArray.apply(null, arguments);
  return splitCallback(args);
};