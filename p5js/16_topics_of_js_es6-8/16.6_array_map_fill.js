let vals = [4, 8, 1, 2, 9];
console.log(vals);

let doubler = x => x * 2;

// let double = vals.map(doubler); // .map returns a new, modified object
let double = vals.map(x => x * 2); // this is effectively the same as the line above
console.log(double);

// .fill modifies the current object
vals.fill(0);
// all array items will be the same number as Math.random() only executes once
vals.fill(Math.random());
console.log(vals);

//this fills a new object with random numbers between 0 and 9
let rndArray = vals.map(() => Math.floor(Math.random() * 10));
console.log(rndArray);

// create a new array with a capacity of 100 and fill it with random numbers between 0 and 1
let vals2 = new Array(100);
vals2 = vals2.fill(0).map(Math.random);
console.log(vals2);

// the same as vals2 but composed into a single line of execution
let vals3 = Array(100)
     .fill()
     .map(Math.random);
console.log(vals3);
