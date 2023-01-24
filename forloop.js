
           //0 1 2 3 4 5 6 7 8 9
         //        -7-6-5-4-3-2-1
const arr = [0,1,2,3,4,5,6,7,8,9];
function func1(arr)  {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    };
}

/*
i   j
0   -1  1 = -(0 + 1)
1   -2  2 = -(1 + 1)
2   -3  3 = -(2 + 1)
3   -4  -4 = 3 + c
*/

function func2(arr) {
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     console.log(arr[i]);
    // };
    for (let i = 1; i <= arr.length; i++) {
        console.log(arr[arr.length - i]);
    }
}

function func3(arr) {
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        console.log(arr[i]);
        if (i !== arr.length - (i + 1)) {
            console.log(arr[arr.length - (i + 1)]);
        }
    }
    return 'done'
}