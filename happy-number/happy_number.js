//leetcode - happy number - easy

var sumOfSquares = function(num) {
    let result = 0;
    while (num > 0) {
        result += (num % 10)**2;
        num = Math.floor(num / 10)
    }
    return result
};

var isHappy = function(n) {
    const seen = new Set();
    seen.add(n);
    let sum = sumOfSquares(n);
    while (sum !== 1) {
        if (seen.has(sum)) {
            return false
        } else {
            seen.add(sum)
        }
        sum = sumOfSquares(sum)
    };
    return true
};