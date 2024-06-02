const throttle = (fn, wait) => {
  let last = 0
  return (...args) => {
    const now = Date.now()
    if (now - last >= wait) {
      last = now
      fn(...args)
    }
  }
}


const callSimran = (name) => {
  console.log(`Hi ${name}`);
}


const fn = throttle(() => callSimran('Simmy'), 2000)


setTimeout(() => fn(), 1000) //ignored 1000<2000
setTimeout(() => fn(), 1100) //ignored 1000<2000
setTimeout(() => fn(), 1200) //ignored 1000<2000
setTimeout(() => fn(), 2500) //Hi Simmy
