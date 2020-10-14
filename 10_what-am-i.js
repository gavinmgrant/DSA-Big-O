function isWhat(n) {
    let ticks = 0;
    if (n < 2 || n % 1 !== 0) {
        ticks++
        return {
            result: false,
            ticks: ticks
        }
    }
    for (let i = 2; i < n; ++i) {
        ticks++
        if (n % i === 0) 
            return {
                result: false,
                ticks: ticks
            }
    }
    return {
        result: true,
        ticks: ticks
    }
}

console.log(isWhat(2));
console.log(isWhat(31));
console.log(isWhat(181));

// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
// Answer: This algorithm determines if the number is a prime number or not, returning true if it is a prime number.
// Answer: The Big O is O(n), linear time, because the running time is directly proportional to the size of the input (n).