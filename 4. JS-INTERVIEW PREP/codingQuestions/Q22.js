const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = numbers.reduce((accumlator, currentVal) => {
  return accumlator + currentVal;
}, 0);

console.log(sum);

// for finding maximum element
const nums = [10, 20, 50, 40];
const max = nums.reduce((acc, curr) => (curr > acc ? curr : acc), nums[0]);
console.log(max); // Output: 50
