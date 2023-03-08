//https://leetcode.com/problems/is-subsequence/

//*1 (2 while loops)

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length) {
        while (j < t.length) {
            if (s[i] === t[j]) {
                break;
            } else {
                j += 1;
            }
        }
        if (j >= t.length) {
            return false;
        }
        i += 1;
        j += 1;
    };
    return true;
};