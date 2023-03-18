//https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    const dict = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    let i = 0;
    while (i < s.length) {
        let left = dict.get(s[i]);
        let right = i < s.length - 1 ? dict.get(s[i + 1]) : 0
        if (left >= right) {
            result += left;
            i += 1
        } else {
            result += (right - left);
            i += 2
        }
    };
    return result
 };