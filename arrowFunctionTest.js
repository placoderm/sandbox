/**
 * @param {number[]} grades
 */
const sumGrades = grades => {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum = sum + grades[i];
    }
    return sum;
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10]));
console.log(sumGrades([12, 10, 13, 19])); // 54