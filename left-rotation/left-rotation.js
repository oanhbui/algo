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