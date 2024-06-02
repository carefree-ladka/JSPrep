const sleep = (wait) => new Promise(res => setTimeout(res, wait))

async function fix() {
  console.log('Start');
  await sleep(2000); // Sleep for 2 seconds
  console.log('End');
}

fix();