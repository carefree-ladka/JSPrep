const person = {
  sayFullName: function (state, city) {
    return `${this.fName} ${this.lName} lives in ${city} ${state}`;
  },
};

const john = {
  fName: "John",
  lName: "Clark",
};

Function.prototype.myBind = function (ctx, ...args) {
  if (typeof this !== "function") throw new Error("Not callable");
  const self = this;
  return function (...newArgs) {
    return self.apply(ctx, [...args, ...newArgs]);
  };
};

console.log(person.sayFullName.bind(john, "Uttar Pradesh")("Lucknow"));
