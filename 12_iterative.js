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

console.log(reverse('testing'));