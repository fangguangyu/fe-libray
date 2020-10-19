// 第一版

var curry = function(fn) {
  var args = [].slice.call(arguments, 1);

  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  }
}

function add(a, b) {
  return a + b;
}

var addCurry = curry(add, 1);
console.log(addCurry(5));