var splarg = require('./index');

// yeah

testToArray();
testTrim();
testSplitCallback();
testSplitCallbackLimit();
testChain();

function testToArray () {
  (function () {
    var args = splarg.apply(null, arguments);
    console.log('length ' + args.length + ' / ' + arguments.length);
    console.log('content ', args, arguments);
  })(1, 2, 3);
};

function testTrim () {
  (function () {
    var args = splarg.trim().apply(null, arguments);
    console.log('length ' + args.length + ' / ' + arguments.length);
    console.log('content ', args, arguments);
  })(1, 2, 3, undefined, undefined);
};

function testSplitCallback () {
  (function () {
    var args = splarg.splitCallback().apply(null, arguments);
    console.log('length ' + args.length + ' / ' + arguments.length);
    console.log('content ', args, arguments);
  })(1,2,3,function () {});
};

function testSplitCallbackLimit () {
  (function () {
    var args = splarg.splitCallback(9).apply(null, arguments);
    console.log('length ' + args.length + ' / ' + arguments.length);
    console.log('content ', args, arguments);
  })(1,2,3,function () {});
};

function testChain () {
  (function () {
    var args = splarg.trim().splitCallback().apply(null, arguments);
    console.log('length ' + args.length + ' / ' + arguments.length);
    console.log('content ', args, arguments);
  })(1,2,3,function () {}, undefined);
};