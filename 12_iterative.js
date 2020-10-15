// 1. iterative function that counts how many sheep jump over the fence.

const countingSheep = (sheep) => {
    let i = sheep + 1;
    do {
        i--;
        console.log(`${i}: Another sheep jumps over the fence`)
    } while (i > 1);
    console.log('All sheep jumped over the fence');
};

// countingSheep(3);


// 2. iterative function that takes two parameters, an integer as a base, and another integer as an exponent.
// the function returns the value of the base raised to the power of the exponent.

const powerCalculator = (base, exp) => {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result = result * base;
    } 
    return result;
};

// console.log(powerCalculator(10, 4));


// 3. iterative function that reverses a string.
// takes a string as input, reverses the string, and returns a new string.

const reverse = (input) => {
    let array = input.split('');
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray.join('');;
};

// console.log(reverse('testing'));


// 4. iterative function that calculates the nth triangular number that forms an equilateral triangle.
// this is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45...

const triangular = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
};

// console.log(triangular(5));


// 5. iterative function that splits a string based on a separator (similar to String.prototype.split).

const splitter = (input) => {
    let array = Array.from(input);
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != '/') {
            newArray.push(array[i]);
        }
    }
    return newArray.join('');
};

// console.log(splitter('02/20/2020'));


// 6. iterative function that prints the Fibonacci sequence of a given number.

const fibonacci = (num) => {
    let a = 1;
    let b = 0;
    let temp = a;
    let answer = [];

    while (num >= 1) {
        temp = a;
        a = a + b;
        b = temp;
        answer.push(b);
        num--;
    }
    return answer;
};

// console.log('Fibonacci sequence: ' + fibonacci(6));

// 7. iterative function that finds the factorial of a given number.
// the factorial of a number can be found by multiplying that number by each number between itself and 1.

const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
        console.log(result);
    }
    return result;
};

console.log(factorial(7));