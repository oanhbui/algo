//https://leetcode.com/problems/minimum-index-sum-of-two-lists/

var findRestaurant = function(list1, list2) {
    const map1 = new Map();
    let answer = [];
    for (let i = 0; i < list1.length; i++) {
        if (!map1.has(list1[i])) {
            map1.set(list1[i], i)
        }
    };
    let minSum = 9999999;
    for (let j = 0; j < list2.length; j++) {
        if (map1.has(list2[j])) {
            const sum = map1.get(list2[j]) + j;
            if (sum <= minSum) {
                if (sum < minSum) {
                    answer = []
                };
                minSum = sum;
                answer.push(list2[j])
            }
        }
    };

    return answer;
};