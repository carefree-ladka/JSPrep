const person = {
  sayFullName: function (state, city) {
    return `${this.fName} ${this.lName} lives in ${city} ${state}`;
  },
};

const john = {
  fName: "John",
  lName: "Clark",
};

Function.prototype.myApply = function (ctx, args) {
  if (typeof this !== "function") throw new Error("Not callable");
  ctx = ctx || globalThis;
  const id = Symbol();
  ctx[id] = this;
  const result = !args || !Array.isArray(args) ? ctx[id]() : ctx[id](...args);
  delete ctx[id];
  return result;
};

console.log(person.sayFullName.myApply(john, ["Uttar Pradesh", "Lucknow"]));
