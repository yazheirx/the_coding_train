var x;
var y;
var red;
var blue;
var green;

function setup() {
     createCanvas(400, 400);
     x = width/2;
     y = height/2;
     red = 50;
     blue = 100;
     green = 200;
     background(220);
}

function draw() {
     // added radom color generator
     red = moveColor(red);
     green = moveColor(green);
     blue = moveColor(blue);
     stroke(red, green, blue);
     let sWeight = floor(random(5));
     strokeWeight(sWeight);
     point(x,y);

     let speed = floor(random(4));
     let r = floor(random(4));
     switch (r) {
          case 0:
               x = x + speed;
               if (x > width) {
                    x = width
               };
               break;
          case 1:
              x = x - speed;
              if (x < 1) {
                   x = 1
              };
               break;
          case 2:
               y = y + speed;
               if(y > height){
                    y = height;
               };
               break;
          case 3:
               y = y - speed;
               if(y < 0){
                    y = 0;
               };
               break;
     };

}

function moveColor(color){
     let chance = floor(random(3))
     let scale = 5
     switch (chance) {
          case 0:
               color = color + scale;
               if(color > 255){
                    color = 255;
               };
               break;
          case 1:
               // do nothing
               break;
          default:
               color = color - scale;
               if(color < 0){
                    color = 0;
               };
               break;
     }
     return color;
}
