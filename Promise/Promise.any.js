Promise.myAny = function (promises = []) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let rejectedCount = 0;
    const totalPromises = promises.length;

    if (!totalPromises) {
      return reject(new AggregateError(errors, "All promises were rejected"));
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(error => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === totalPromises) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

// Example usage:
const p1 = Promise.reject('Error 1');
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'Success 2'));
const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'Success 3'));

Promise.myAny([p1, p2, p3])
  .then(value => {
    console.log('Resolved with value:', value); // "Resolved with value: Success 2"
  })
  .catch(error => {
    console.error('Rejected with error:', error);
  });
