//https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

var minimumRounds = function(tasks) {
    const tasksMap = new Map();
    for (let i = 0; i < tasks.length; i++) {
        if (!tasksMap.has(tasks[i])) {
            tasksMap.set(tasks[i], 1)
        } else {
            tasksMap.set(tasks[i], tasksMap.get(tasks[i]) + 1)
        }
    };
    const taskNum = [...tasksMap.values()];
    console.log(taskNum);
    let round = 0;
    for (let j = 0; j < taskNum.length; j++) {
        if (taskNum[j] === 1) {
            return -1
        };
        if (taskNum[j] % 3 === 0) {
            round = round + taskNum[j] / 3
        } else {
            round = round + Math.floor(taskNum[j] / 3) + 1
        }
    };
    return round
};