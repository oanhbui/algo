//hackerRank - ceasar cipher

function caesarCipher(s, k) {
    // Write your code here
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const result = [];
    k = k % 26;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() !== s[i].toUpperCase()) {
            if (s[i].toLowerCase() === s[i]) {
                let letterIndex = lowerCase.indexOf(s[i]);
                if (letterIndex < 26 - k) {
                    result.push(lowerCase[letterIndex + k])
                } else {
                    result.push(lowerCase[letterIndex + k - 26])
                }
            } else {
                let letterIndex = upperCase.indexOf(s[i]);
                if (letterIndex < 26 - k) {
                    result.push(upperCase[letterIndex + k])
                } else {
                    result.push(upperCase[letterIndex + k - 26])
                }
            }
        } else {
            result.push(s[i])
        }
    };
    return result.join('')
}