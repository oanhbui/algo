/*https://leetcode.com/problems/reverse-vowels-of-a-string/*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const sList = [...s];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelList = [];  
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelList.push(s[i])
        }
    }

    for (let k = 0; k < s.length; k++) {
        if (vowels.includes(s[k])) {
            sList[k] = vowelList.pop();
        }
    };
    return sList.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const sList = [...s];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelList = [];
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelList.push(s[i])
        }
    }
    const reversedList = vowelList.reverse();
    let index = 0;
    for (let k = 0; k < s.length; k++) {
        if (vowels.includes(s[k])) {
            sList[k] = reversedList[index];
            index += 1;
        }
    };
    return sList.join('');
};