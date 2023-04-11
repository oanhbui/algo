//https://leetcode.com/problems/removing-stars-from-a-string/

var removeStars = function(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            result.pop(result[-1])
            if (i === 0) {
                continue
            }
        } else {
            result.push(s[i])
        }
    };
    return result.join('')
};