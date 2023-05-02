//hackerRank Drawing Book

//1
function pageCount(n, p) {
    // Write your code here
    const totalFlip = Math.floor(n / 2);
    let frontFlip = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            frontFlip += 1;
        };
        if (i === p) {
            let backFlip = totalFlip - frontFlip;
            if (backFlip > frontFlip) {
                return frontFlip
            } else {
                return backFlip
            }
        }
    }
}


//2
function pageCount(n, p) {
    // Write your code here
    const totalFlip = Math.floor(n / 2);
    const frontFlip = Math.floor(p / 2);
    const backFlip = totalFlip - frontFlip;
    return Math.min(frontFlip, backFlip)
}