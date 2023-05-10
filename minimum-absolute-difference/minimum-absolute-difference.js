//hackerRank - Minimum absolute difference in an Array

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let minDif = 2000000000;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let currentDif = Math.abs(arr[i] - arr[j]);
            if (currentDif < minDif) {
                minDif = currentDif
            }
        }
    };
    return minDif
}