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