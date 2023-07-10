//leetcode - valid anagram - easy
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    sLookup = new Map();
    for (const char of s) {
        if (sLookup.has(char)) {
            sLookup.set(char, sLookup.get(char) + 1)
        } else {
            sLookup.set(char, 1)
        }
    }

    for (const char of t) {
        if (sLookup.has(char)) {
            sLookup.set(char, sLookup.get(char) - 1)
        }
        if (sLookup.get(char) === 0) {
            sLookup.delete(char)
        }
    }
 
    return sLookup.size === 0
};
