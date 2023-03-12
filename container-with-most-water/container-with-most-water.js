//https://leetcode.com/problems/container-with-most-water/

//root force
    // let maxWater = 0;
    // let currentWater = 0;
    // for (let x = 0; x < height.length; x++) {
    //     for (let y = x + 1; y < height.length; y++) {
    //         const minHeight = Math.min(height[x], height[y]);
    //         currentWater = minHeight * (y - x);
    //         maxWater = Math.max(maxWater, currentWater);
    //     }
    // };
    // return maxWater;

//2 pointers

let x = 0;
let y = height.length - 1;
let maxWater = 0;
let currentWater = 0;
while (x < y) {
    if (height[x] > height[y]) {
        currentWater = height[y] * (y -x);
        y -= 1
    } else {
        currentWater = height[x] * (y-x);
        x += 1
    }
    maxWater = Math.max(maxWater, currentWater)
};
return maxWater