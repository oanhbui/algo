/**
* @param {string} word1
* @param {string} word2
* @return {boolean}
*/
var checkAlmostEquivalent = function(word1, word2) {
   const lookup1 = new Map();
   for (const char of word1) {
       if (lookup1.has(char)) {
           lookup1.set(char, lookup1.get(char) + 1)
       } else {
           lookup1.set(char, 1)
       }
   };
   for (const char of word2) {
       if (lookup1.has(char)) {
           lookup1.set(char, lookup1.get(char) - 1)
       } else {
           lookup1.set(char, -1)
       }
   }
   for (const difference of lookup1.values()) {
       if (Math.abs(difference) > 3) {
           return false
       }
   }
   return true
};