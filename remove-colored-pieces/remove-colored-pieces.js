//leetcode -  Remove Colored Pieces if Both Neighbors are the Same Color - Medium

var winnerOfGame = function(colors) {
    lookup = new Map();
    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i] === colors[i - 1] && colors[i] === colors[i + 1]) {
            if (lookup.has(colors[i])) {
                lookup.set(colors[i], lookup.get(colors[i]) + 1);
            } else {
                lookup.set(colors[i], 1);
            }
        }
    }
    let aMoves = 0;
    let bMoves = 0;
    if (lookup.has("A")) {
        aMoves = lookup.get("A")
    }
    if (lookup.has("B")) {
        bMoves = lookup.get("B")
    }
    return aMoves > bMoves
};