//Question : 1
const sum = (a) => (b) => b ? sum(a + b) : a;

// console.log(sum(1)(2)(3)(4)()); //10

//Question : 2

const sum1 = (...x) => {
  const s1 = x.reduce((a, b) => a + b, 0);
  const innerSum = (...y) => {
    const s2 = y.reduce((a, b) => a + b, 0);
    if (y.length > 0) return sum1(s1 + s2);
    return s1;
  };
  return innerSum;
};

// console.log(sum1(1, 2, 3)(4, 5, 6)(1, 1, 1)()); //24

//Question -3

const currySum = (() => {
  const handleSum = (...args) => args.reduce((a, b) => a + b, 0);
  return {
    sum2: (...x) => {
      const s1 = handleSum(...x)
      const innerSum = (...y) => {
        const s2 = handleSum(...y)
        return y.length ? sum2(s1 + s2) : s1;
      };
      return innerSum;
    }
  }
})()


// const sum2 = (...x) => {
//   const s1 = x.reduce((a, b) => a + b, 0);
//   const innerSum = (...y) => {
//     const s2 = y.reduce((a, b) => a + b, 0);
//     return y.length ? sum2(s1 + s2) : s1;
//   };
//   return innerSum;
// };

const { sum2 } = currySum
const result1 = sum2(1, 2, 3, 4)();
const result2 = sum2(1)(2)(3)(4)();
const result3 = sum2(1, 2)(3, 4)();
const result4 = sum2(1, 2, 3)(4)();
const result5 = sum2(1)(2, 3, 4)();
const result6 = sum2()();

console.log(result1); // Output: 10
console.log(result2); // Output: 10
console.log(result3); // Output: 10
console.log(result4); // Output: 10
console.log(result5); // Output: 10
console.log(result6); // Output: 0
