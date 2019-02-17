// reference: https://youtu.be/q8SHaDQdul0

function useVar() {
     console.log(x);
     var x = 100;
     console.log(x);
}

function useLet() {
     console.log(y);
     let y = 100;
     console.log(y);
}

function useVar2() {
     let x;
     console.log(x);
     x = 100;
     console.log(x);
}

function hoisting() {
     // var i, x, y //hosting will add this and remove all the var declarations below
     for (var i = 0; i < 100; i++) {
          // some stuff will happen
     }

     for (var i = 0; i < 100; i++) {
          // now there are to variables in scope labeled 'i'
     }
     for (let j = 0; i < 100; i++) {
          // 'j' is only available at this 'block' level due to the 'let' 
     }

     var x = mouseX + 100;
     if (x > 50) {
          var y = 20;
          ellipse(x, y, 100, 100);
     }
}

function startup() {}
// useVar(); // this will return undefined then 100
// useLet(); // this will trow "ReferenceError: y is not defined" stopping the script
// useVar2(); // this will return undefined then 100
