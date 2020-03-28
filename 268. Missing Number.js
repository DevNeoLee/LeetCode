/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.reduce((a,b) => a + b);
    let n = nums.length + 1;
    return (n * (n - 1))/2 - sum;
};

let input = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let answer = missingNumber(input);
console.log(answer);
