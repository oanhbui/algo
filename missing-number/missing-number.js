//https://leetcode.com/problems/missing-number/description

var missingNumber = function(nums) {
  
    const sortedNums = [...nums].sort((a, b) => a - b);
    if (!sortedNums.includes(0)) {
        return 0
    }
    let missingNum = nums.length;
    for (let i = sortedNums.length - 1; i >= 1; i--) {
        if (sortedNums[i] - sortedNums[i - 1] !== 1) {
            missingNum = sortedNums[i] - 1;
            break
        }
    }
    return missingNum
};