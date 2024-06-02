function circuitBreaker(originalFunction, failureThreshold, recoveryTime) {
  let failureCount = 0;
  let lastFailureTime = null;
  let isOpen = false;

  return async function (...args) {
    if (isOpen) {
      const timeSinceFailure = new Date() - lastFailureTime;
      if (timeSinceFailure > recoveryTime) {
        console.log('Circuit breaker is trying to close...');
        isOpen = false;
      } else {
        console.log('Service is unavailable. Circuit is open.');
        throw new Error('Service is unavailable');
      }
    }

    try {
      const result = await originalFunction(...args);
      failureCount = 0;
      console.log('Function executed successfully. Circuit remains closed.');
      return result;
    } catch (error) {
      failureCount++;
      lastFailureTime = new Date();
      console.log(`Function failed. Failure count: ${failureCount}`);

      if (failureCount >= failureThreshold) {
        isOpen = true;
        console.log('Failure threshold reached. Circuit is now open.');
      }

      throw error;
    }
  };
}

async function unreliableService() {
  // Simulating a service that may fail
  if (Math.random() < 0.7) {
    throw new Error('Service error');
  }
  return 'Service response';
}

const protectedService = circuitBreaker(unreliableService, 3, 5000);

// Example usage
(async () => {
  for (let i = 0; i < 10; i++) {
    try {
      const response = await protectedService();
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
    await new Promise(res => setTimeout(res, 1000)); // Wait 1 second between attempts
  }
})();
