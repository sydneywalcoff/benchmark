const Benchmark = require('benchmark');
const { bubbleSort, quickSort } = require('./sort');

const numbers = [];
for (let i=0; i <= 5000; i++) {
    numbers.push(i)
}

const suite = new Benchmark.Suite;

suite
    .add('bubble sort', function() {
        const testArr = [...numbers];
        bubbleSort(testArr);
    })
    .add('quick sort', function() {
        const testArr = [...numbers];
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds`));
    })
    .run();