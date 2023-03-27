//https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

function timeConversion(s) {
    // Write your code here
    const timeList = s.split(':');
    if (timeList[2][2] === 'A' && timeList[0] === '12') {
        timeList[0] = '00'   
    } else if (timeList[2][2] === 'P' && parseInt(timeList[0]) >= 1 && parseInt(timeList[0]) <= 11) {
        timeList[0] = (parseInt(timeList[0]) + 12).toString()
    };
    return timeList.join(':').substring(0, 8)
}