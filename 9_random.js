function findRandomElement(arr) {
    let ticks = 0;
    ticks++;
    return { 
        result: arr[Math.floor(Math.random() * arr.length)],
        ticks: ticks
    }
};

console.log(findRandomElement([1, 2]));
console.log(findRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(1), constant time, because regardless of the array input, the running time is always 1.