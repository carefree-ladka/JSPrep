const iterator = (collection) => {
  let idx = 0;
  return {
    next: () =>
      idx < collection.length
        ? { value: collection[idx++], done: false }
        : { done: true },
  };
};

const arr = [1, 2, 3, 4];
const iter = iterator(arr);
console.log(iter.next()); //{ value: 1, done: false }
console.log(iter.next()); //{ value: 2, done: false }
console.log(iter.next()); //{ value: 3, done: false }
console.log(iter.next()); //{ value: 4, done: false }
console.log(iter.next()); //{ done: true }
