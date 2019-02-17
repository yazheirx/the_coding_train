function setup() {
     let x = 50;
     x = 100;
     const y = 50;
     // y = 100; // throws a type error
     const particle = { x: 100, y: 100 };
     particle.x = 200; //due to particle being an object we can make changes
     particle.z = 50;
     //  particle = { x: 20, y: 100}; // throws a type error
}

function go1() {} // this resolves to let go = function() {}
const go2 = function() {};
const go3 = () => {};
