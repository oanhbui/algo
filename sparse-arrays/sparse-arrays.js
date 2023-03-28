//https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one


function matchingStrings(strings, queries) {
    // Write your code here
    let results = [];
    const seen = new Map();
    for (let i = 0; i < strings.length; i++) {
        if (!seen.has(strings[i])) {
            seen.set(strings[i], 1)
        } else {
            seen.set(strings[i], seen.get(strings[i]) + 1)
        }
    };
    for (let j = 0; j < queries.length; j++) {
        if (seen.has(queries[j])) {
            results.push(seen.get(queries[j]))
        } else {
            results.push(0)
        }
    };
    return results
}