/*
Draw star

input = 5
*
* *
* * *
* * * * 
* * * * *

input = 3
*
* *
* * *

*/
function myrepeat(n) {
    let obj = ''
    for (i = 0; i < n; i++) {
        obj += '*'
    }
    return obj
}

function myrepeat(n) {
    let obj = ''
    for (i = 0; i < n; i++) {
        obj += '*'
    }
    return obj
}

function drawStar1(num) {
    for (let i = 0; i < num; i++) {
        let obj = ''
        for (k = 0; k < i; k++) {
            obj += '*';  
        }
        console.log(obj)
    }
}
 
drawStar1(5)


// function drawStar1(num) {
//     if (num > 0) {
//         for (let i = 1; i <= num; i++) {
//             console.log('*'.repeat(i))
//         }
//     }
// }
 
// drawStar1(5)

/*

Draw star 2

input = 5
* * * * *
* * * *
* * *
* *
*

*/

function repeatObj(n) {
    let obj = [];
    for (let i = 0; i < n; i++) {
        obj.push('*');
    }
    return obj.join(' ');
}

function drawStar2(n) {
    let result = [];
    for (let k = n; k > 0; k--) {
        result.push(repeatObj(k));
    }
    return result.join('\n')
}

console.log(drawStar2(5))

/*


Draw star 3
input=3
*
* *
* * *
* *
*
*/

function drawStar3(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push('*'.repeat(i))
    }
    for (let k = n - 1; k >= 1; k--) {
        result.push('*'.repeat(k))
    }
    console.log(result.join('\n'))
}

drawStar3(5)

/*


Draw star 4
input = 4
   *
  * *
 * * *
* * * *


Fill matrix
input 4 4
1   2   3   4
5   6   7   8
9   10  11  12
13  14  15  16


Fill matrix 2
input 4 4
1   5   9   13          
2   6   10  14   
3   7   11  15   
4   8   12  16
*/