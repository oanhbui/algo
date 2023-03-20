//https://leetcode.com/problems/intersection-of-two-arrays/


//**1
var intersection = function(nums1, nums2) {
    const seen = new Set(nums1);
    const uniqueNums2 = new Set(nums2);
    let result = [];
    for (const num of uniqueNums2) {
        if (seen.has(num)) {
            result.push(num)
        }
    };
    return result
};

//*2
var intersection = function(nums1, nums2) {
    const seen = new Set(nums1);
    let result = new Set();
    for (const num of nums2) {
        if (seen.has(num)) {
            result.add(num)
        }
    };
    return [...result]
};
