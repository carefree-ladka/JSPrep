const person = {
  sayFullName: function (state, city) {
    return `${this.fName} ${this.lName} lives in ${city} ${state}`;
  },
};

const john = {
  fName: "John",
  lName: "Clark",
};

Function.prototype.myCall = function (ctx, ...args) {
  if (typeof this !== "function") throw new Error("Not callable");
  ctx = ctx || globalThis;
  const id = Symbol();
  ctx[id] = this;
  const result = ctx[id](...args);
  delete ctx[id];
  return result;
};

console.log(person.sayFullName.myCall(john, "Uttar Pradesh", "Lucknow"));
