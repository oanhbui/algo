//hackerRank - Task Queue

function taskQueue(batchSize, processingTime, numTasks) {
    let minimumTime = 0;
    for (let i = 0; i < batchSize.length; i++) {
        let totalTime = Math.ceil(numTasks[i] / batchSize[i]) * processingTime[i];
        if (totalTime > minimumTime) {
            minimumTime = totalTime
        }
    };
    return minimumTime
};

console.log(taskQueue([4, 3], [6, 5], [8, 8]))