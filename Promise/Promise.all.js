Promise.myAll = function (promises = []) {
  return new Promise((resolve, reject) => {
    if (!promises.length) resolve([])
    const result = []
    let count = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((value) => {
        result[index] = value
        count++
        if (count === promises.length) {
          resolve(result)
        }
      }).catch((error) => reject(error))
    })
  })
}

// Example usage:
const p1 = Promise.reject(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.myAll([p1, p2, p3])
  .then((values) => {
    console.log(values); // [3, 42, "foo"]
  })
  .catch((error) => {
    console.error(error);
  });

