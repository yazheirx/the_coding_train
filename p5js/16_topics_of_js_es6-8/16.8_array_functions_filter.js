let vals = [5, 4, 9, 2, 1];

function isEven(num) {
     return num % 2 === 0;
}

let evens = vals.filter(isEven);
console.log(evens);
let odds = vals.filter(x => x % 2); // because 1 would be evaluated to 'true' and 0 to 'false'
console.log(odds);

let s = 'It was  a dark and stormy night.';
let words = s.split(/\W+/).filter(word => word.length);
console.log(words);
