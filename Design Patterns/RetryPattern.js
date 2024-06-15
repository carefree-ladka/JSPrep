function retryOperation(operation, maxRetries, delay) {
  let retries = 0;

  function execute() {
    operation()
      .then((res) => console.log(res))
      .catch((err) => {
        if (retries < maxRetries) {
          retries++;
          console.log("operation failed. Retrying...");
          setTimeout(execute, delay);
        } else {
          console.log("Max retries reached. Operation failed");
        }
      });
  }
  execute();
}

function simulateNetworkRequest() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      resolve("Request succeeded");
    } else {
      reject("Request failed");
    }
  });
}

retryOperation(simulateNetworkRequest, 3, 1000);
