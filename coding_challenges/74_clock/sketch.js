function setup() {
     createCanvas(400, 400);
}

function draw() {
     background(0);

     let hr = hour();
     let mn = minuet();
     let sc = second();

     fill(255);
     // noStroke();
     text("something", 200, 200);
     text(hr + ':' + mn + ':' + sc, 10, 200);

}
