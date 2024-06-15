const arr = [4, 5, 2, 10, 8];

const nextGreaterElement = (arr) => {
  const stack = [];
  const result = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack.at(-1) <= arr[i]) stack.pop();
    result[arr[i]] = !stack.length ? -1 : stack.push(arr[i]);
    stack.push(arr[i]);
  }

  return arr.map((num) => result[num]);
};

console.log(nextGreaterElement(arr));
