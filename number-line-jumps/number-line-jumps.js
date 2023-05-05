//hackerRank - number line jumps

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let distance = Math.abs(x1 - x2);
    if (distance === 0) {
        return 'YES'
    };
    let prevDistance = 10001;
    while (distance < prevDistance) {
        x1 += v1;
        x2 += v2;
        prevDistance = distance;
        distance = Math.abs(x1 - x2);
        if (distance === 0) {
            return 'YES'
        }
    };
    return 'NO'
}