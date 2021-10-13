function correct(string) {
    let stringArray = string.split('');
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] == ["5"]) {
            stringArray[i] = "S"
        } else if (stringArray[i] == ["0"]) {
            stringArray[i] = "O"
        } else if (stringArray[i] == ["1"]) {
            stringArray[i] = "I"
        }
    }
    console.log(stringArray)
    return stringArray.join("")
}

console.log(correct("5D01G5DF0SDF1GSFD"))