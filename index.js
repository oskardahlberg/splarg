var toArray = require('./lib/to-array');

var utils = {
  trim: require('./lib/array/trim'),
  splitCallback: require('./lib/array/split-callback')
};

module.exports = splargify();

function splargify (stack, handler) {
  if (!stack) stack = [];
  var options = toArray.apply(null, arguments).slice(2);

  if (handler) {
    stack = stack.concat({
      handler: handler,
      options: options
    });
  }

  var result = function () {
    var args = toArray.apply(null, arguments);
    for (var i in stack) {
      args = stack[i].handler.apply(null, [ args ].concat(stack[i].options));
    }
    return args;
  };

  for (var name in utils) {
    result[name] = splargify.bind(null, stack, utils[name]);
  }

  return result;
};