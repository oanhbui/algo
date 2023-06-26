//leetcode - Isomorphic Strings - easy

var isIsomorphic = function(s, t) {
    const pairs = new Map();
    const tValues = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!pairs.has(s[i])) {
            if (tValues.has(t[i])) {
                return false
            };
            pairs.set(s[i], t[i]);
            tValues.add(t[i])
        } else {
            if (t[i] !== pairs.get(s[i])) {
                return false
            }
        }
    };
    return true
};