let numbers = [100, 12, 9, 5, 14, 3, 11];

// filter() ALWAYS returns an array
filt = numbers.filter(function(number) {
    return number >= 112;
}); // [14]
filt

// .find() returns the first match or undefined
fin = numbers.find(function(number) {
    return number >= 112;
}); // 14
fin