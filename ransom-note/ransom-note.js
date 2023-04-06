//https://leetcode.com/problems/ransom-note/

var canConstruct = function(ransomNote, magazine) {
    const seen = new Map();
    for (let i = 0; i < ransomNote.length; i++) {
        if (seen.has(ransomNote[i])) {
            seen.set(ransomNote[i], seen.get(ransomNote[i]) + 1)
        } else {
            seen.set(ransomNote[i], 1)
        }
    };
    for (let j = 0; j < magazine.length; j++) {
        if (seen.has(magazine[j])) {
            seen.set(magazine[j], seen.get(magazine[j]) - 1)
        };
        if (seen.get(magazine[j]) === 0) {
            seen.delete(magazine[j])
        }
    };
    return seen.size === 0
};