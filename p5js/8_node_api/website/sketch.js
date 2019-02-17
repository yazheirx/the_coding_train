function setup() {
     createCanvas(300, 200);
     console.log('running');

     let button = select('#submit');
     button.mousePressed(submitWord);
}

function draw() {}

function submitWord() {
     let word = select('#word').value();
     let score = Number(select('#score').value());
     console.log(word, score);

     loadJSON(`add/${word}/${score}`, finished);
     function finished(data) {
          console.log(data);
     }
}
