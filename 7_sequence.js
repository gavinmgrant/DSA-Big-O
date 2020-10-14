function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

console.log(compute(10));
console.log(compute(20));

// What does the following algorithm do? What is its runtime complexity? Explain your answer
// Answer: It creates an array containing the Fibonacci Sequence in an iterative way through looping.
// The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers,
// starting with 0, and 1.