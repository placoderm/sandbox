// Description:

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// https://www.geeksforgeeks.org/javascript-tostring-function/
// https://sebhastian.com/javascript-square/


function squareDigits(num) {
    let squaredString = ""; //what we will build as final string
    let numString = num.toString() //turn the num into string
    let temp;//because I don't know how to do it right
    for (let i = 0; i < numString.length; i++) {
        temp = numString[i] ** 2;
        squaredString = squaredString + temp.toString();
    }
    return parseInt(squaredString, 10);
}


console.log(squareDigits(1234));
