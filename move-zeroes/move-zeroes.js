/*https://leetcode.com/problems/move-zeroes/*/

var moveZeroes = function(nums) {
    let w = 0;
    const n = nums.length;
    for (let r = 0; r < n; r++) {
        if (nums[r] !== 0) {
            [nums[r], nums[w]] = [nums[w], nums[r]];
            w += 1
        }
    }
    return nums
};