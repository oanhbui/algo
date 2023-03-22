//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    const unique = new Set();
    let max = 0;
    let tail = 0;
    for (let head = 0; head < s.length; head++) {
        while (unique.has(s[head])) {
            unique.delete(s[tail]);
            tail += 1
        };
        unique.add(s[head]);
        max = Math.max(max, unique.size)
    };
    return max
};