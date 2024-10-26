const treag = [];
const kvd = [];

for (let i = 1; i <= 10; i++) {
    treag.push(i*((i+1)/2));
    kvd.push(Math.pow(i, 2));
}

console.log('treag: ', treag.join('  '));
console.log('kvd: ', kvd.join('  '));

const rez = [...treag, ...kvd];
console.log('rez: ', rez.join('  '));
console.log('sorted rez: ', rez.sort((a, b) => b - a).join('  '));