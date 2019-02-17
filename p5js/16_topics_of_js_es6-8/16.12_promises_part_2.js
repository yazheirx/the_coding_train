function setup() {
     noCanvas();
     //  setTimeout(sayHello, 1000);
     delay(1000)
          .then(() => createP('hello'))
          .catch(err => console.error(err));
     // delay('bad')
     //      .then(() => createP('hello'))
     //      .catch(err => console.error(err));
}

function delay(time) {
     return new Promise((resolve, reject) => {
          if (isNaN(time)) {
               reject(new Error('delay requires a valid number '));
          } else {
               setTimeout(resolve, time);
          }
     });
}

function sayHello() {
     createP('hello');
}
