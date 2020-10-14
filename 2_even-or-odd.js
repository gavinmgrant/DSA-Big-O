function isEven(value) {
    let ticks = 1;
    if (value % 2 === 0) {
        return {
            result: true,
            ticks: ticks
        }
        ticks++
    }
    else
        return {
            result: false,
            ticks: ticks
        }
}

console.log(isEven(10));
console.log(isEven(100));
console.log(isEven(1001));

// What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(1), constant time, because regardless of your input, the run time is always 1.