module.exports = function argumentsToArray (args__) {
  var args = new Array(arguments.length);
  for (var i = 0; i < arguments.length; i++) args[i] = arguments[i];
  return args;
};