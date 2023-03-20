//https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            continue;
        }
        if ((i === 0 || flowerbed[i - 1] !== 1) && (i === flowerbed.length - 1 || flowerbed[i + 1] !== 1)) {
            count += 1;
            i += 1
        } 
    };
    return n <= count
};
