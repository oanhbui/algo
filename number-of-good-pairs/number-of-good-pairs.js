//https://leetcode.com/problems/number-of-good-pairs

var numIdenticalPairs = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                counter += 1
            }
        }
    };
    return counter
};