const numArray = [];

for(let i = 0; i<=15; i++) {
    numArray.push(Math.round(Math.random() * (100 - 1) + 1));
}

const smallestNum = numArray.reduce((acc, item) => acc > item ? acc = item : acc, numArray[0]);
const idxEl = numArray.indexOf(smallestNum);
const lastElem = numArray[numArray.length - 1];
console.log('Before change: ', numArray);
console.log('The smallest num: ', smallestNum);
numArray[idxEl] = lastElem;
numArray[numArray.length - 1] = smallestNum;
console.log('After change: ', numArray);