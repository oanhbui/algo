/*https://leetcode.com/problems/rotate-array/description/*/

var reverse = function(nums, fromIndex, toIndex) {
    while (fromIndex < toIndex) {
        [nums[fromIndex], nums[toIndex]] = [nums[toIndex], nums[fromIndex]];
        fromIndex += 1;
        toIndex -= 1
    }
    return nums
}

var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, nums.length - k, nums.length - 1);
    return nums.reverse()
};