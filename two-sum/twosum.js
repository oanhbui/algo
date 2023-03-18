/**
 * twoSum return index of the pair sum up to target
 * @param number[] nums 
 * @param number target 
 * 
 * @example twoSum([1,2,3,4,5,6], 8) = 1, 5
 * @example twoSum(1,2,3,4,5,6,7, 19) = [-1, -1]
 */
export function twoSum(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n; i++) { // O(n)
        const firstNum = nums[i];
        for (let m = i + 1; m < n; m++) {  // O(n)
            if (nums[m] === (target - firstNum)) {
                return [i, m]
            }
        }
    }
    return [-1, -1]
} // O(n^2)

/**
 * Same as above but using hash map
 * @param {*} nums 
 * @param {*} target 
 */
export function twoSumHashmap(nums, target) {
    const indexes = {};
    for (let l = 0; l < nums.length; l++) {
        indexes[nums[l]] = l;
    };

    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        let secondNum = target - firstNum;
        if (indexes[secondNum] !== undefined) {
            return [i, indexes[secondNum]];
        }
    }
    return [-1, -1]
}


/*Two pointers*/
var twoSum = function(nums, target) {
    const sortedNums = nums.map((item,index) => [item, index]).sort((a, b) => a[0] - b[0]);
    console.log(sortedNums)
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        if (sortedNums[l][0] + sortedNums[r][0] > target) {
            r -= 1
        } else if (sortedNums[l][0] + sortedNums[r][0] < target) {
            l += 1
        } else {
            return [sortedNums[l][1], sortedNums[r][1]]
        }
    }
};

/**Using Map() */
var twoSum = function(nums, target) {
    const model = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (model.has(target - nums[i])) {
            return [i, model.get(target - nums[i])]
        }
        model.set(nums[i], i);
    }
};
