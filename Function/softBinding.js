const softBind = (obj, fn) => {
  return function (...args) {
    const globalCtx = typeof window !== 'undefined' ? window : globalThis
    return fn.apply(
      (!this || this === globalCtx) ? obj : this, args
    )
  }
}

const person = {
  empName: 'Alex',
  age: 28,
  isDisabled: false,
  greet: function () {
    console.log(`Hi, my name is ${this.empName}.`);
  }
}

const bound = softBind(person, person.greet)
bound()

bound.call({ empName: 'Robert' })