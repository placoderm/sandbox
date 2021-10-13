// Chapter 10: Implicit Return, StringSizes
// INSTRUCTIONS:
// Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

// This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.

// Use an arrow function (implicit return is optional).

// HINTS:
// 1. Which array method should you use? 
// 4. You're transforming an array of strings into an array of numbers (the number of items will stay the same)
// 5. Thus you should use the .map(callback) method

// TESTS 
// Pass: Implements getStringSizes
// Fail: Uses arrow function
//         Uses arrow function: expected false to equal true

//
// ------------ MY NOTES: ------------------
// On line 30 it uses an arrow function
// The first hint asks what array method should be used. However that is not specified in the intstructions
// The second hint says you are transforming an array. However the instructions say that it should "return" an array.
//

/**
 * @param {string[]} strings
 */

const getStringSizes = strings => {
        const sizes = [];
        for (let i = 0; i < strings.length; i++) {
            sizes[i] = strings[i].length
        };
        return sizes
    }
    // Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7] 
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]

// So I re-wrote using the .map() function. However, this also give the same error telling me to use an arrow function. But there *is* an arrow function on line 44

// const getStringSizes = strings => {
//     return strings.map(function (string) {
//         return string = string.length
//     })
// }

// MY SUGGESTION:
// Forgive me if I am missing/misunderstanding something. If the challenge needs to be completed using ONLY arrow functions, then you should say that explicitly. As it is it just says to use A arrow function. I was also going to suggest that you state explicitly that it include an array function. However, I think that if you can *only* use arrow functions, the only way to complete it is using an array function.
//
// Perhaps what the instructions were saying was that you need to write an arrow function *in addition to* the arrow function already given in the starter code.
//
// There was actually an earlier challenge where the instructions said to use arrow *functions* plural. I also found that confusing because I missed the plural and only solved it with one. Which was not accepted.
//
// I love the course! Thanks so much.