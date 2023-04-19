//https://leetcode.com/problems/group-anagrams/

const keyBySortedChar = (s) => [...s].sort().join('');

var groupAnagrams = function(strs) {
    const sortMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        const key = keyBySortedChar(strs[i]);
        if (sortMap.has(key)) {
            sortMap.get(key).push(strs[i])
        } else {
            sortMap.set(key, [strs[i]])
        }
    };
    return [...sortMap.values()]
};