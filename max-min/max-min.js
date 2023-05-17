//hackerRank - Max min

function maxMin(k, arr) {
    // Write your code here
    if (k === arr.length) {
        return Math.max(...arr) - Math.min(...arr)
    };
    const sortedArr = arr.sort((a, b) => a - b);
    let minDiff = 10000000000;
    let start = 0;
    for (let end = k - 1; end < arr.length; end++) {
        let currentDiff = sortedArr[end] - sortedArr[start];
        if (currentDiff < minDiff) {
            minDiff = currentDiff
        };
        start += 1
    };
    return minDiff
}