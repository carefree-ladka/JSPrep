const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

console.log(arr.myMap((x) => x * 2)); //[ 2, 4, 6, 8 ]
