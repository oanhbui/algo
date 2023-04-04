//https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

function flippingBits(n) {
    // Write your code here
    const binary = n.toString(2);
    const binary32 = binary.padStart(32, '0');
    let result = 0;
    for (let i = 0; i < binary32.length; i++) {
        if (binary32[i] === '0') {
            result += 1 * 2 ** (binary32.length - 1 - i)
        } else {
            result += 0 * 2 ** (binary32.length - 1 - i)
        }
    };
    return result
}