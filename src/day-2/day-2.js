// --- Day 2: Dive! ---

// Part 1

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let x = 0, y = 0;

input.forEach(coordinate => {
    let [direction, value] = coordinate.split(/\s+/);
    
    value = parseInt(value);

    if (direction === 'forward') x += value;
        else if (direction === 'down') y += value;
            else y -= value;
});

console.log("What do you get if you multiply your final horizontal position by your final depth?", x * y);

// Part  2

let aim = 0;
x = 0, y = 0; 

input.forEach(coordinate => {
    let [direction, value] = coordinate.split(/\s+/);
    
    value = parseInt(value);

    if (direction === 'down') aim += value;
        else if (direction === 'up') aim -= value;
            else {
                x += value;
                y += aim * value;
            }
});

console.log("What do you get if you multiply your final horizontal position by your final depth?", x * y);
