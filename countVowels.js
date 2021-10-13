function getCount(str) {

    let letters = str.split("");
    const vowels = letters.filter(letter => {
        let search = /[aieou]/
        return search.test(letter)
    })
    return vowels.length;
}

console.log(getCount("aberreeersracadabra"))

//alternative

// function getCount(str) {

//     let search = /[aieou]/
//     let count=0
//     for (i=0;i<str.length;i++){
//         if (search.test(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

// someone elses code:

// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
// }