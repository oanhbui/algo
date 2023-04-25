//HackerRank Subarray Division 2

//1
function birthday(s, d, m) {
    // Write your code here
    if (s.length < m) {
        return 0
    };
    let trackSum = 0;
    let methodCount = 0;
    for (let i = 0 ; i < s.length; i++) {
        trackSum += s[i];
        if (i >= m) {
            trackSum = trackSum - s[i - m];
        }
        if (i >= m - 1 && trackSum === d) {
            methodCount += 1
        };
    };
    return methodCount
}

//2
function birthday(s, d, m) {
    // Write your code here
    if (s.length < m) {
        return 0
    };
    let trackSum = 0;
    let methodCount = 0;
    let start = 0;
    for (let i = 0 ; i < s.length; i++) {
        trackSum += s[i];
        if (i >= m - 1) {
            if (trackSum === d) {
                methodCount += 1
            };
            trackSum = trackSum - s[start];
            start += 1
        }
    };
    return methodCount
}