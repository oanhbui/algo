//hackerRank - Separate the numbers

function isBeautiful(s, firstLength) {
    let currentNum = BigInt(s.substring(0, firstLength));
    let i = firstLength;
    while (i < s.length) {
        currentNum += BigInt(1);
        let nextLength = currentNum.toString().length;
        let nextNum = BigInt(s.substring(i, i + nextLength));
        if (nextNum !== currentNum) {
            return false
        }
        i += nextLength
    }
    return true
};

function separateNumbers(s) {
    // Write your code here
    for (let firstLength = 1; firstLength <= s.length / 2; firstLength += 1) {
        if (isBeautiful(s, firstLength)) {
            console.log(`YES ${s.substring(0, firstLength)}`);
            return;
        }
    }
    console.log('NO')
}