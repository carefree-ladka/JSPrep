const obj = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};

const flatten = (obj, sep, parent = "") => {
  return Object.keys(obj).reduce((acc, curr) => {
    let newKey = parent ? parent + sep + curr : curr;
    if (typeof obj[curr] === "object" && !Array.isArray(obj[curr])) {
      acc = {
        ...acc,
        ...flatten(obj[curr], sep, newKey),
      };
    } else acc[newKey] = obj[curr];
    return acc;
  }, {});
};

console.log(flatten(obj, ".")); //{ a: 1, 'b.c': 3, 'b.d.e': 5 }
