const obj = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
    },
  },
};

const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const copiedObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }
  return copiedObj;
};

const newObj = deepCopy(obj);
newObj.a = 10;
newObj.b.c = 11;
newObj.b.d.e = 15;

console.log(obj); //{ a: 1, b: { c: 3, d: { e: 5 } } }
console.log(newObj); //{ a: 10, b: { c: 11, d: { e: 15 } } }
