/**
 * @param {number[]} temperatures
 */
const getYear = (years, searchYear) => {
    
    return years.find(year => {
        console.log(year);
        console.log(searchYear)
        return searchYear === year
    })
}

const getFreezingTemperatures = temperatures => temperatures.filter(temp => temp < 0);

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined