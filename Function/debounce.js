const debounce = (fn, wait) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), wait)
  }
}


const callSimran = (name) => {
  console.log(`Hi ${name}`);
}


const fn = debounce(() => callSimran('Simmy'), 2000)
fn()

