//hackerRank - Missing numbers

function missingNumbers(arr, brr) {
    // Write your code here
    const bCounter = new Map();
    for (let i = 0; i < brr.length; i++) {
        if (bCounter.has(brr[i])) {
            bCounter.set(brr[i], bCounter.get(brr[i]) + 1)
        } else {
            bCounter.set(brr[i], 1)
        }
    };
    console.log(bCounter);
    let result = [];
    for (let j = 0; j < arr.length; j++) {
        if (bCounter.has(arr[j])) {
            bCounter.set(arr[j], bCounter.get(arr[j]) - 1)
        } else {
            result.push(arr[j])
        };
    };
    console.log(bCounter);
    for (const [key, value] of bCounter.entries()) {
        if (value > 0) {
            result.push(key)
        }
    };
    return result.sort((a, b) => a - b)
}
