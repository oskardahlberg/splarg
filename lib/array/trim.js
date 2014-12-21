// strips trailing undefined
module.exports = function trim (args) {
  var result;
  var skip = true;
  for (var i = args.length - 1; i >= 0; i--) {
    if (skip && args[i] === undefined) continue;
    if (!result) result = new Array(i + 1);
    result[i] = args[i];
    skip = false;
  }
  return result || [];
};