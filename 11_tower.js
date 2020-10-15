// Tower of Hanoi recursive function
let num = 0;
let ticks = 0;

const hanoi = (disk, start, int, dest) => {
    if (disk > 0) {
        // change order of stacks
        hanoi(disk - 1, start, dest, int);
        ticks++;
        // log the actual move
        console.log((num + 1) + '. Move disc ' + disk + ' from ' + start + ' to ' + dest);
        num++;
        ticks++
        // change order of stacks
        hanoi(disk - 1, int, start, dest);
        ticks++;
    }
};
  
hanoi(5, 'rod A', 'rod B', 'rod C');
console.log('Total moves: ' + num);
console.log('Runtime: ' + ticks + ' operations');

// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// Answer: Disk 1 is on rod C, disk 2 is on rod C, disk 3 is on rod C.

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// Answer: 7

// What is the runtime of your algorithm?
// Answer: Factorial time, O(n!)