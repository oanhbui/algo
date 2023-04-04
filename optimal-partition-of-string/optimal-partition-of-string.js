//https://leetcode.com/problems/optimal-partition-of-string/description/


var partitionString = function(s) {
    let count = 0;
    const seen = new Set();
    seen.add(s[0])
    for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) {
            seen.clear();
            count += 1
        }
        seen.add(s[i]);
    };
    return count
};