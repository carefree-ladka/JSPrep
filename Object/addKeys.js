const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  a: 1,
  c: 3,
  b: 2,
};

const obj3 = {
  a: 1,
};

const addKeys = (...objs) => {
  const result = {};
  objs.forEach((obj) => {
    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        result[key] = (result[key] || 0) + obj[key];
      } else result[key] = obj[key];
    }
  });
  return result;
};

console.log(addKeys(obj1, obj2, obj3)); //{ a: 3, b: 4, c: 3 }
