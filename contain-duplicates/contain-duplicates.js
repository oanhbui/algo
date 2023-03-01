/*https://leetcode.com/problems/contains-duplicate/*/

//1

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


//2
var containsDuplicate = function(nums) {
    const seen = new Set(nums);
    return seen.size < nums.length
};

//3
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true
        }
        seen.add(num)
    }
    return false
};