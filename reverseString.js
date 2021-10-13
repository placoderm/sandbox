// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.



function solution(str) {
    let myArray = str.split("");
    let reversed = "";
    for (let i = myArray.length - 1; i > -1; i = i - 1) {
        reversed = reversed + myArray[i]
    }
    return reversed
}

console.log(solution("cats"))

// alternative

// function solution(str) {
//     let myArray = str.split("");
//     let reversed = [];
//     myArray.forEach(item=>{
//         reversed.unshift(item)
//     })
    
//     return reversed.join("")
// };
// console.log(solution("food"))
// console.log(solution("cats"))