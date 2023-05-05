//hackerRank - Left rotation

//#1
function flip(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1
    };
    return arr
};
function rotateLeft(d, arr) {
    // Write your code here
    flip(arr, 0, d - 1);
    flip(arr, d, arr.length - 1);
    flip(arr, 0, arr.length - 1);
    return arr
}


//#2
function rotateLeft(d, arr) {
    // Write your code here
    const rotated = [];
    for (let i = d; i < arr.length; i++) {
        rotated.push(arr[i])
    };
    for (let j = 0; j < d; j++) {
        rotated.push(arr[j])
    };
    return rotated
}