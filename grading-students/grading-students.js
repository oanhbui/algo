function gradeRounding(grade) {
    if (grade < 38) {
        return grade
    }
    if (grade % 5 < 3) {
        return grade
    }
    const result = grade + (5 - grade % 5);
    return result
}


function gradingStudents(grades) {
    // Write your code here
    return grades.map((grade) => gradeRounding(grade))
}