//leetcode - Longest Arithmetic Subsequence of Given Difference - Medium

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */

var longestSubsequence = function(arr, difference) {
    const lookup = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (lookup.has(arr[i] - difference)) {
            lookup.set(arr[i], lookup.get(arr[i] - difference) + 1)
        } else {
            lookup.set(arr[i], 1)
        }
    }
    let longest = 0
    for (const value of lookup.values()) {
        longest = Math.max(longest, value)
    }
    return longest
};