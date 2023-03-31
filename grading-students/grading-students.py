#https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

def gradingStudents(grades):
    # Write your code here
    rounded_grade = []
    for grade in grades:
        if grade < 38 or grade % 5 < 3:
            rounded_grade.append(grade)
        else:
            rounded_grade.append(grade + (5 - grade % 5))
    return rounded_grade