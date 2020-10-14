function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    let ticks = 0;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];
        ticks++;

        if (currentElement < item) {
            minIndex = currentIndex + 1;
            ticks++;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
            ticks++;
        }
        else {
            return {
                result: currentIndex,
                ticks: ticks
            }
            ticks++;
        }
    }
    return {
        result: -1,
        ticks: ticks
    }
}

console.log(efficientSearch([1, 2, 3], 3));
console.log(efficientSearch([1, 2, 3, 4, 5, 6], 6));
console.log(efficientSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12));

// Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer
// Answer: The Big O is O(log(n)), logarithmic time, because the algorithm cuts the problem size in half each round,
// thus as the input increases the running time increases slowly, less than linear time.