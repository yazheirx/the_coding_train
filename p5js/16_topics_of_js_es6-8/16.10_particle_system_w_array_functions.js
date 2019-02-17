let particles;
function setup() {
     createCanvas(600, 400);
     particles = Array(100)
          .fill()
          .map(x => new Particle());
}

function draw() {
     background(0);
     for (let i = 0; i < 5; i++) {
          let p = new Particle();
          particles.push(p);
     }
     particles.sort((a, b) => b.col - a.col);
     particles.forEach(p => {
          p.update();
          p.show();
     });
     // for (const particle of particles) {
     //      particle.update();
     //      particle.show();
     // }
     particles = particles.filter(p => !p.finished());

     // let sumX = particles.reduce((x, p) => x + p.x, 0);
     // let sumY = particles.reduce((y, p) => y + p.y, 0);
     // let centerX = sumX / particles.length;
     // let centerY = sumY / particles.length;
     // fill(255, 0, 0);
     // ellipse(centerX, centerY, 24, 24);

     let sumV = particles.reduce((v, p) => v.add(p.x, p.y), createVector(0, 0));
     sumV.div(particles.length);
     fill(255, 0, 0);
     ellipse(sumV.x, sumV.y, 4, 4);
}
