//hackerRank Picking Numbers

//1  --- O(n)
function pickingNumbers(a) {
    // Write your code here
    const counter = new Map();
    for (let i = 0; i < a.length; i++) {
        if (counter.has(a[i])) {
            counter.set(a[i], counter.get(a[i]) + 1)
        } else {
            counter.set(a[i], 1)
        }
    };
    let maxLength = 0;
    let length = 0;
    for (const key of counter.keys()) {
        if (counter.has(key + 1)) {
            length = counter.get(key) + counter.get(key + 1);
            maxLength = Math.max(maxLength, length)
        };
        maxLength = Math.max(counter.get(key), maxLength)
    };
    return maxLength
};


//2 O(nlogn) 
function pickingNumbers(a) {
    // Write your code here
    a.sort((a, b) => a - b);
    let maxLength = 0;
    let length = 1;
    let lastNum = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] - lastNum <= 1) {
            length += 1;
            lastNum = Math.min(a[i], lastNum)
        } else {
            length = 1;
            lastNum = a[i]
        };
        maxLength = Math.max(maxLength, length)
    };
    return maxLength
}