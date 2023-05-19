//hackerRank - Strong password

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";
    let charToAdd = 0;
    let lengthToAdd = 0;
    if (n < 6) {
        lengthToAdd = 6 - n
    };
    let numberScore = 0;
    let lowercaseScore = 0;
    let uppercaseScore = 0;
    let specialScore = 0;
    for (let i = 0; i < n; i++) {
        if (numbers.includes(password[i])) {
            numberScore += 1
        } else if (lower_case.includes(password[i])) {
            lowercaseScore += 1
        } else if (upper_case.includes(password[i])) {
            uppercaseScore += 1
        } else if (special_characters.includes(password[i])) {
            specialScore += 1
        }
    };
    const score = [numberScore, lowercaseScore, uppercaseScore, specialScore];
    console.log(score);
    for (let j = 0; j < score.length; j++) {
        if (score[j] === 0) {
            charToAdd += 1
        }
    };
    return Math.max(charToAdd, lengthToAdd)
}
