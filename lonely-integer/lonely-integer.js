//1
function lonelyinteger(a) {
    // Write your code here
    const seen = new Map();
    for (let i = 0; i < a.length; i++) {
        if (seen.has(a[i])) {
            seen.set(a[i], seen.get(a[i]) + 1)
        } else {
            seen.set(a[i], 1)
        }
    };
    for (const [key, value] of seen.entries()) {
        if (value === 1) {
            return key
        }
    }
}

//2 using Set()
function lonelyinteger(a) {
    // Write your code here
    const seen = new Set();
    for (let i = 0; i < a.length; i++) {
        if (seen.has(a[i])) {
            seen.delete(a[i])
        } else {
            seen.add(a[i])
        }
    };
    return [...seen.values()][0]
}