/*https://leetcode.com/problems/contains-duplicate/*/

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const model = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (model === nums[j]) {
                return true
                break
            }
        }
    }
    return false
};