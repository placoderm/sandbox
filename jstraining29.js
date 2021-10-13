// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result += result.concat(arr[1])
    }
    let reversed = [];
    for (let i = result.length; i < 0; i--) {
        reversed += push(result[i])
    }

    return reversed
}


console.log(bigToSmall([[1, 2], [3, 4], [5, 6]])) //should return "6>5>4>3>2>1"
bigToSmall([[1, 3, 5], [2, 4, 6]]) //should return "6>5>4>3>2>1"
bigToSmall([[1, 1], [1], [1, 1]]) //should return "1>1>1>1>1"