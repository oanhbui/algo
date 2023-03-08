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

//*2 (same as *1 but separated function to reuse)

function findFrom(haystack, needle, index) {
    let i = index;
    while (i < haystack.length) {
        if (haystack[i] === needle) {
            return i;
        }
        i += 1;
    };
    return -1
}

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length) {
        j = findFrom(t, s[i], j);
        if (j < 0) {
            return false;
        }
        i += 1;
        j += 1;
    };
    return true;
};