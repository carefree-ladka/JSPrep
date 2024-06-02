
const cycleSort = (nums = []) => {

  for (let i = 0; i < nums.length; i++) {
    const j = nums[i] - 1
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    else i++
  }
  return nums
}

console.log(cycleSort([4, 1, 3, 2, 5]));