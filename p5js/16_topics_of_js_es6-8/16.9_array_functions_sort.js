let vals = [5, 4, 9, 2, 1];
console.log(vals);
vals.sort(); // acts on the existing array
console.log(vals);

let words = ['a', 'hello', 'B', 'goodbye', 7, 5];
words.sort();
console.log(words);

let objArray = [{ x: 2, y: 10 }, { x: 5, y: 6 }];
function compare(a, b) {
     return a.y - b.y;
}

objArray.sort(compare);
console.log(objArray);

let s = 'It was  a dark and stormy night.';
words = s.split(/\W+/).filter(word => word.length > 2);
words.sort((a, b) => a.length - b.length); // sort by word length, shortest to longest 
console.log(words);
