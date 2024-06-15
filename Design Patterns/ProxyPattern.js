const person = {
  name: "pawan",
  age: 25,
};

const handler = {
  get: (target, key) => {
    if (key === "name") return target[key].toUpperCase();
  },
  set: (target, key, value) => {
    if (key === "address") {
      key = key + "01";
    }
    target[key] = value;
  },
};

const proxy = new Proxy(person, handler);

proxy["address"] = "Lucknow";
console.log(proxy); //{ name: 'pawan', age: 25, address01: 'Lucknow' }
