//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/


var kidsWithCandies = function(candies, extraCandies) {
    let greatestNum = candies[0];
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > greatestNum) {
            greatestNum = candies[i]
        }
    };
    const result = [];
    for (let j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= greatestNum) {
            result.push(true)
        } else {
            result.push(false)
        }
    };
    return result
};