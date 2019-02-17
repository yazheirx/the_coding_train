// higher order functions receive functions as an argument
function setup() {
     // using an inline anonymous function for the call back function
     sing(() => console.log('woof woof'));
}

function sing(callback) {
     console.log('la la la la');
     if (callback instanceof Function) {
          callback();
     }
}

function meow() {
     console.log('meow meow');
}

// --------------------------
// Part 2
// --------------------------

function multiplier2(x, factor) {
     return x * factor;
}

function multiplier(factor) {
     return x => x * factor;
}

// having multiplier return a function allows us to create
// a new function with "factor" defined
let doubler = multiplier(2);
let tripler = multiplier(3);
