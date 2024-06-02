Promise.myAllSettled = function (promises = []) {
  return Promise.all(
    promises.map(promise => {
      return Promise.resolve(promise).then((value) => ({
        status: 'fulfilled', value
      })).catch((reason => ({
        status: 'rejected', reason
      })))
    })
  )
}

// Example usage:
const p1 = Promise.resolve(3);
const p2 = Promise.reject('An error occurred');
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.myAllSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 3 },
    //   { status: 'rejected', reason: 'An error occurred' },
    //   { status: 'fulfilled', value: 'foo' }
    // ]
  });