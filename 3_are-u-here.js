function areYouHere(arr1, arr2) {
    let ticks = 1;
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        ticks++;
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2)
                return {
                    result: true,
                    ticks: ticks
                }
            ticks++;
        }
    }
    return {
        result: false,
        ticks: ticks
    }
}

console.log(areYouHere([1, 2, 3], [12, 13, 14]));
console.log(areYouHere([1, 2, 3, 4, 5, 6], [12, 13, 14, 15, 16, 17]));
console.log(areYouHere([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]));

// What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(n^k), polynomial time, since the algorithm requires 2 levels of looping.