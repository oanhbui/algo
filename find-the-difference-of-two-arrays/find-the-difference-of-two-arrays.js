//https://leetcode.com/problems/find-the-difference-of-two-arrays/

var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const answer = [[], []];
    for (let i = 0; i < nums1.length; i++) {
        if (!set2.has(nums1[i]) && !answer[0].includes(nums1[i])) {
            answer[0].push(nums1[i])
        }
    };
    for (let j = 0; j < nums2.length; j++) {
        if (!set1.has(nums2[j]) && !answer[1].includes(nums2[j])) {
            answer[1].push(nums2[j])
        }
    };
    return answer
};