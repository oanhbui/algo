function doubleSize(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            num = num * 2
        }
    };
    return num
};
console.log(doubleSize([1, 2, 4, 11, 12, 8], 2))


//2

function doubleSize(arr, num) {
    const seen = new Set(arr);
    while (seen.has(num)) {
        num = num * 2
    }
    return num
};