module.exports = function splitCallback (args, min) {
  console.log('wooo', min)
  var last = args[args.length - 1];
  var done;
  if ((!min || min < args.length) &&
      typeof last == 'function') done = last;

  var length = args.length - (done ? 1 : 0);
  var head = new Array(length);
  for (var i = 0; i < length; i++) head[i] = args[i];
  var result = [ head, done ];
  return result;
};