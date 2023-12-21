const arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, intialvalue) {
  let accumulator;
  accumulator = intialvalue ? intialvalue : 0;
  const startIndex = intialvalue ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

console.log(arr.myReduce((acc, curr) => acc + curr, 0)); //10
