//leetcode - h index - medium

/**
 * @param {number[]} citations
 * @return {number}
 */
const isHIndex = (h, citations) => {
    let count = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= h) {
            count += 1
        }
    };
    return count >= h
}

var hIndex = function(citations) {
    let maxH = citations.length;
    let minH = 0;
    let result = 0;
    while (minH <= maxH) {
        let mid = Math.floor((maxH + minH) / 2);
        if (isHIndex(mid, citations)) {
            result = mid;
            minH = mid + 1
        } else {
            maxH = mid - 1
        }
    }


    return result
};