//hackerRank Drawing Book

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