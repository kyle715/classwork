function sumAll(arr) {
  var out = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    out += i;
  }
  return out;
}

sumAll([1, 4]);

