/**
 * @param {string[]} strings
 */

 const getStringSizes = strings => {
    const sizes=[];
    for(let i=0;i<strings.length;i++){
        sizes[i]=strings[i].length};
    return sizes
}
// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7] 
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]
