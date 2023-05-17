//hackerRank - Anagram

/*Two words are anagrams of one another if their letters can be rearranged to form the other word.
Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of
characters to change to make the two substrings into anagrams of one another.
Example
Break into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous
and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec'
and 'cde' which are anagrams. Two changes were necessary.*/


function anagram(s) {
    if (s.length % 2 !== 0) {
        return -1
    };
    const firstHalf = new Map();
    for (let i = 0; i < s.length / 2; i++) {
        if (firstHalf.has(s[i])) {
            firstHalf.set(s[i], firstHalf.get(s[i]) + 1)
        } else {
            firstHalf.set(s[i], 1)
        }
    };
    let result = s.length / 2;
    for (let i = s.length / 2; i < s.length; i++) {
        if (firstHalf.has(s[i])) {
            result -= 1;
            firstHalf.set(s[i], firstHalf.get(s[i]) - 1);
            if (firstHalf.get(s[i]) === 0) {
                firstHalf.delete(s[i])
            };
        };
    };
    return result
}
