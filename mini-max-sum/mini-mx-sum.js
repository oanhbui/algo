//https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=three-month-preparation-kit&utm_campaign=email_campaign&utm_medium=email&utm_source=email

function miniMaxSum(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if ( arr[i] < min) {
            min = arr[i]
        };
        sum += arr[i]
    };
    console.log(sum - min, sum - max)
}