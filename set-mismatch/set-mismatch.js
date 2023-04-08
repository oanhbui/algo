//https://leetcode.com/problems/set-mismatch/

var findErrorNums = function(nums) {
    const result = [0, 0];
    const numsList = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (numsList.has(nums[i])) {
            numsList.set(nums[i], numsList.get(nums[i]) + 1)
        } else {
            numsList.set(nums[i], 1)
        }
    };
    for (let j = 1; j < nums.length + 1; j++) {
        if (!numsList.has(j)) {
            result[1] = j
        } else if (numsList.get(j) === 2) {
            result[0] = j
        }
    };
    return result
};