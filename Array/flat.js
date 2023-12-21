const arr = [1, [[[2], 7], 8], [[[[[9]]]]]];

// const isFlattened = (arr) => !arr.some(Array.isArray);

const flatten = (arr, depth) => {
  if (depth <= 0) return arr;
  return arr.reduce(
    (acc, curr) =>
      Array.isArray(curr)
        ? [...acc, ...flatten(curr, depth - 1)]
        : [...acc, curr],
    []
  );
};

console.log(flatten(arr, Infinity)); //[ 1, 2, 7, 8, 9 ]