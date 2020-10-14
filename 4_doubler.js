function doubleArrayValues(array) {
    let ticks = 1;
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
        ticks++;
    }
    return {
        result: array,
        ticks: ticks
    }
}

console.log(doubleArrayValues([1, 2, 3]));
console.log(doubleArrayValues([1, 2, 3, 4, 5, 6]));
console.log(doubleArrayValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

// What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(n), linear time, because the running time is directly proportional to the size of the input (n).