function findSmallestInt(args) {
    let smallest = args[0];
    args.forEach(item => {
        if (smallest > item) {
            smallest = item
        }
    });
    return smallest
}

// function findSmallestInt(args) {
//     return Math.min(...args)
//   }

console.log(findSmallestInt([78, -56, 232, 12, 8]))