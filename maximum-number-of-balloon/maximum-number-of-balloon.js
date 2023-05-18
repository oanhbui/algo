//leetcode - Maximum number of balloons

var maxNumberOfBalloons = function(text) {
    const mapText = new Map();
    for (let i = 0; i < text.length; i++) {
        if (!mapText.has(text[i])) {
            mapText.set(text[i], 1)
        } else {
            mapText.set(text[i], mapText.get(text[i]) + 1)
        }
    };
    let result = 1000000000;
    let maxTime = 0;
    const sample = 'balon';
    for (let j = 0; j < 5; j++) {
        if (!mapText.has(sample[j])) {
            return 0
        };
        if (sample[j] === 'b' || sample[j] === 'a' || sample[j] === 'n') {
            maxTime = mapText.get(sample[j]);
        } else {
            maxTime = Math.floor(mapText.get(sample[j]) / 2);
        };
        if (maxTime < result) {
                result = maxTime
            }
    };
    return result
};