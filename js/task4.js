const fruits=['apple','pineapple','mango','melon','grape'];
const citrus=['orange','lemon','lime'];

console.log('fruits: ', fruits);
console.log('citrus: ', citrus);
console.log('fruits: ', [...fruits, ...citrus]);
fruits.splice(fruits.indexOf('mango')+1, 0, ...['pear', 'cherry', 'plum', 'raspberry', 'strawberry']);
console.log('масив fruits, в якому після mango вставлено: pear, cherry, plum, raspberry, strawberry: ', fruits);
fruits.splice(fruits.length - 4, 3);
console.log('масив fruits, в якому видалено останні 3 елементи: ', fruits);
console.log('sorted fruits: ', fruits.sort());
console.log('reverse sorted fruits: ', fruits.reverse());
console.log('Sorted by length of words', fruits.sort((a, b) => a.length - b.length));