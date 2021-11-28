function setup() {
     createCanvas(400, 400);
     angleMode(DEGREES);
}

function draw() {
     background(0);
     translate(200, 200);
     rotate(-90);

     let hr = hour();
     let mn = minute();
     let sc = second();

     strokeWeight(8);
     noFill();
     
     // Second arc 
     stroke(255, 100,150);
     let secondAngle = map(sc, 0, 60, 0, 360)
     arc(0, 0, 300, 300, 0, secondAngle);
     //  second hand
     push();
     rotate(secondAngle);
     line(0,0, 100, 0);
     pop();

     // minute arc
     stroke(150, 100,255);
     let minuteAngle = map(mn, 0, 60, 0, 360)
     arc(0, 0, 280, 280, 0, minuteAngle);
     //  minute hand
     push();
     rotate(minuteAngle);
     line(0,0, 75, 0);
     pop();

     // hour arc
     stroke(150, 255,100);
     let hourAngle = map(hr % 12, 0, 12, 0, 360)
     arc(0, 0, 260, 260, 0, hourAngle);
     //  Hour hand
     push();
     rotate(hourAngle);
     line(0,0, 50, 0);
     pop();

     stroke(255);
     point(0,0);
}
