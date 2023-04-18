//https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function(word1, word2) {
    const result = [];
    const maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++) {
        if (word1[i] !== undefined) {
            result.push(word1[i])
        };
        if (word2[i] !== undefined) {
            result.push(word2[i])
        }
    };
    return result.join('')
};