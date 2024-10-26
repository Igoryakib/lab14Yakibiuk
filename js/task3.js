const numArray = [];

for(let i = 0; i<=15; i++) {
    numArray.push(Math.round(Math.random() * (100 - 1) + 1));
}

const A = 10;

const avg = numArray.reduce((acc, item) => item > 0 ? acc += item : acc
, 0) / numArray.length;
console.log('Before change: ', numArray);
console.log('avg: ', avg);
const amount = numArray.reduce((acc, item, idx) => item <= A && idx % 2 === 0 ? acc += 1 : acc, 0);
console.log('amount with strange clause: ', amount);