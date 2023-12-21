const obj = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};

const handleOptions = (options) => {
  const { keys, values } = options;

  if (keys) {
    options.values = false;
  } else if (values) {
    options.keys = false;
  } else options.keys = true;
  return options;
};

const getAllKeys = (obj, options) => {
  const { keys } = handleOptions(options);
  return Object.keys(obj).reduce((acc, curr) => {
    if (typeof obj[curr] === "object" && !Array.isArray(obj[curr])) {
      acc.push(...getAllKeys(obj[curr], options));
    } else acc.push(keys ? curr : obj[curr]);
    return acc;
  }, []);
};

console.log(
  getAllKeys(obj, {
    keys: false,
    values: false,
  })
);
  //[ 'a', 'c', 'e' ]