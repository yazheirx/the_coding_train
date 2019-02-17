let vals = [5, 4, 9, 2, 1];
// let sum = 0;
// for (let i = 0; i < vals.length; i++) {
//      sum += vals[i];
// }
// for (const val of vals) {
//      sum += val;
// }
function sum(acc, val) {
     //  console.log(acc);
     return acc + val;
}
let answer = vals.reduce(sum, 0);
console.log(answer);

// as the sum function above can be simplified to a single line in ES6 the following line can be written
let answer2 = vals.reduce((acc, val) => acc + val, 10);
console.log(answer2);

let biggest = vals.reduce((acc, val) => (val > acc ? val : acc));
console.log(biggest);
