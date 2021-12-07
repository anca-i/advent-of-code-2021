// --- Day 1: Sonar Sweep ---

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\n");
let measurementCount = 0; 

for (let i = 1; i <= input.length; i++) {
    if (input[i] > input [i-1]) {
        measurementCount++;
    }
}

console.log("How many measurements are larger than the previous measurement?", measurementCount);

measurementCount = 0;

for (let i = 0; i < input.length - 3; i++) {
        let sum1 = +input[i] + +input[i+1] + +input[i+2];
        let sum2 = +input[i+1] + +input[i+2] + +input[i+3];

        if (sum2 > sum1) {
            measurementCount++;
        }
}

console.log("How many sums are larger than the previous sum?", measurementCount);
