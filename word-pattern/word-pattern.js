//leetcode - Word Pattern - easy



/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
     s = s.split(" ");
     if (s.length != pattern.length) {
         return false
     }
     charMap = new Map()
     for (let i = 0; i < pattern.length; i++) {
         if (!charMap.has(pattern[i])) {
             charMap.set(pattern[i], s[i])
         } else {
             if (s[i] != charMap.get(pattern[i])) {
                 return false
             }
         }
     };
     if (charMap.size == new Set(charMap.values()).size) {
         return true
     } else {
         return false
     }
};