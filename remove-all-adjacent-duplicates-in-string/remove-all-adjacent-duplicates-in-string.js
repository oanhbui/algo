//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

var removeDuplicates = function(s) {
    const result = [];
    result.push(s[0]);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === result[result.length - 1]) {
            result.pop()
        } else {
            result.push(s[i])
        }
    };
    return result.join('')
};