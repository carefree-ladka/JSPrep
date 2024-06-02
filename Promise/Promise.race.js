Promise.myRace = function (promises = []) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    });
  });
};

// Example usage:
const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'Success 1'));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error 2'));
const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'Success 3'));

Promise.myRace([p1, p2, p3])
  .then(value => {
    console.log('Resolved with value:', value); // "Resolved with value: Success 2"
  })
  .catch(error => {
    console.error('Rejected with error:', error); // "Rejected with error: Error 2"
  });
      