//HackerRank - Sales by Match

function sockMerchant(n, ar) {
    // Write your code here
    if (n === 1) {
        return 0
    };
    const classify = new Map();
    let pairCount = 0;
    for (let i = 0; i < n; i++) {
        if (classify.has(ar[i])) {
            classify.set(ar[i], classify.get(ar[i]) + 1) 
        } else {
            classify.set(ar[i], 1)
        };
        if (classify.get(ar[i]) % 2 === 0) {
            pairCount += 1
        }
    };
    return pairCount
}