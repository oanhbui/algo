//hackerRank - Closest numbers

function closestNumbers(arr) {
    // Write your code here
    const sorted = arr.sort((a, b) => a -b);
    let minimumDiff = 20000000;
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let currentDiff = sorted[i] - sorted[i - 1];
        if (currentDiff < minimumDiff) {
            minimumDiff = currentDiff;
            result = [];
            result.push(sorted[i - 1], sorted[i])
        } else if (currentDiff === minimumDiff) {
            result.push(sorted[i - 1], sorted[i])
        }
    };
    return result
}