//[0,1,0,0,1,0,1,1,1,0,0,0,1]

export function CountFre1(nums) {
    let basket0 = 0;
    let basket1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            basket0 += 1
        };
        if (nums[i] === 1) {
            basket1 += 1
        }
    };
    if (basket0 > basket1) {
        return basket0
    } else if (basket0 < basket1) {
        return basket1
    } else {
        return basket0
    }
}

export function CountFre2(nums) {
    let basket0 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            basket0 += 1
        }
    };
    let basket1 = nums.length - basket0;
    if (basket0 > basket1) {
        return basket0
    } else if (basket0 < basket1) {
        return basket1
    } else {
        return basket0
    }
}

//[0,5,3,4,7,8,3,5]
// let maxnum = -1;
// for (let i = 0; i < nums.leng; i++) {
//     if (nums[i] > maxnum) {
//         maxnum = nums[i];
//     };
// }
// return


//[0,1,0,0,3,1,0,1,3,1,1,3,0,0,0,1]
export function CountFre1(nums) {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]] === undefined) {
            counter[nums[i]] = 0;
        }
        counter[nums[i]] = counter[nums[i]] + 1;
    };
    // counter={0:3, 1:5, 3:3}
    // Object.entries(counter) = [[0,3], [1,5], [3,3]]
    let maxFre = -1;
    let maxNum = null;
    for (const [num, freq] of Object.entries(counter)) {
        if (freq > maxFre) {
            maxFre = freq
            maxNum = num
        } 
    }
    return maxNum
    
}