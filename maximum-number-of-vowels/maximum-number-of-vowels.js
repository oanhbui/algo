//Leetcode - Maximum number of vowels in a substring of given length

var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let starter_count = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            starter_count += 1
        }
    };
    let maximum_vowel = starter_count;
    let start = 1;
    let end = k;
    while (end < s.length) {
        if (vowels.has(s[end])) {
            starter_count += 1
        };
        if (vowels.has(s[start - 1])) {
            starter_count -= 1
        };
        if (starter_count > maximum_vowel) {
            maximum_vowel = starter_count
        };
        start += 1;
        end += 1
    };
    return maximum_vowel
};