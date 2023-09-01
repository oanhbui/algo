/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s
    };
    const collect = new Array(numRows).fill(null).map(() => []);
    let i = 0;
    let row = 0;
    while (i < s.length) {
        while (i < s.length && row < numRows) {
            collect[row].push(s[i]);
            i += 1;
            row += 1
        };
        row = numRows - 2;
        while (i < s.length && row >= 0) {
            collect[row].push(s[i]);
            i += 1;
            row -= 1
        };
        row = 1
    };
    let result = collect.flat().join('');
    return result
};