//hackerRank - Recursion: Fibonacci numbers

//1
function fibonacci(n) {
    let first = 0;
    let second = 1;
    let third;
    for (let i = 0; i < n - 1; i++) {
        third = first + second;
        first = second;
        second = third
    };
    return third
}

//2
function fibonacci(n) {
    if (n < 2) {
        return n
    };
    return fibonacci(n - 1) + fibonacci(n - 2)
}

//3
const cache = new Map();

function fibonacci(n) {
    if (n < 2) {
        return n
    };
    if (cache.has(n)) {
        return cache.get(n);
    }
    const result =  fibonacci(n - 1) + fibonacci(n - 2);
    cache.set(n, result);
    return result;
}