/*https://leetcode.com/problems/merge-similar-items/*/

//Solution1 using Object
var mergeSimilarItems = function(items1, items2) {
    const weights = {};
    for (const [value, weight] of [...items1, ...items2]) {
        if (weights[value] === undefined) {
            weights[value] = weight
        } else {
            weights[value] += weight
        }
    }

    return Object.entries(weights).sort((a, b) => a[0] - b[0])
    
};