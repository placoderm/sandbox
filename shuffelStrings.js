function tripleTrouble(one, two, three) {
    let final = "";
    for (let i = 0; i < one.length; i++) {
        final = final + one[i] + two[i] + three[i];
        console.log(final);
        console.log(i);
    }
    return final;
}

console.log(tripleTrouble("aad", "bbd", "ccd"))