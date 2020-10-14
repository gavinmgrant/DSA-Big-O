function naiveSearch(array, item) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        if (array[i] === item) {
            ticks++;
            return {
                result: array[i],
                ticks: ticks
            }
        }
    }
};

console.log(naiveSearch([1, 2, 3], 3));
console.log(naiveSearch([1, 2, 3, 4, 5, 6], 6));
console.log(naiveSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12));

// What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(n), linear time, because the running time is directly proportional to the size of the input (n).