//https://leetcode.com/problems/remove-element/description/

//**1 time O(n) space O(n)

var removeElement = function(nums, val) {
    let valid = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            valid.push(nums[i])
        }
    };
     for (let j = 0; j < valid.length; j++) {
         nums[j] = valid[j];
     };
     return valid.length
 };


 //**2 2 pointers, time O(n) space O(1)

 var removeElement = function(nums, val) {
    let r = 0;
    let w = 0;
    while (r < nums.length) {
        if (nums[r] !== val) {
            [nums[r], nums[w]] = [nums[w], nums[r]];
            w += 1
        }
        r += 1
    };
    return w
};