function setup() {
     createCanvas(600, 400);
     background(0);
     let button = createButton('press');
     //  button.mousePressed(changeBackground); // assigning a callback
     //  function changeBackground() { // the call back function
     //       background(random(255));
     //  }

     // anonymous function or inline function
     // building the call back function in the arguments section removes the need for a name
     //  button.mousePressed(function() {
     //       background(random(255));
     //  });

     // basic arrow function
     //  button.mousePressed(() => {
     //       background(random(255));
     //  });

     //  single line arrow function
     button.mousePressed(() => background(random(255)));
     let counter1 = new Counter(100, 500);
     let counter2 = new Counter(10, 50);
     let counter3 = new Counter(200, 5000);
     counter1.start();
     counter2.start();
     counter3.start();
}

function draw() {
     //  counter1.countIt();
}

class Counter {
     constructor(start, wait) {
          this.count = start;
          this.wait = wait;
          this.p = createP('');
          //   setInterval(() => {
          //        this.count++;
          //        this.p.html(this.count);
          //   }, wait);
     }
     start() {
          setInterval(() => this.countIt(), this.wait);
     }

     countIt() {
          this.count++;
          this.p.html(this.count);
     }
}
