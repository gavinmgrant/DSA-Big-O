function createPairs(arr) {
    let ticks = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
            ticks++;
        }
        ticks++;
    }
    return { ticks: ticks };
}

console.log(createPairs([1, 2]));
console.log(createPairs([1, 2, 3, 4]));
console.log(createPairs([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(createPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));

// What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(n^2), polynomial time, since the algorithm requires 2 levels of looping.