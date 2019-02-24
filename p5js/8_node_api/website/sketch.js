function setup() {
    createCanvas(300, 200);
    console.log('running');

    let button = select('#submit');
    button.mousePressed(submitWord);
    let buttonA = select('#analyse');
    buttonA.mousePressed(analyseThis);
}

function analyseThis() {
    let txt = select('#textInput').value();
    let data = {
        text: txt
    };
    httpPost('analyse', data, 'json', dataPosted, postErr);
}

function postErr(err) {
    console.error(err);
}

function dataPosted(result) {
    console.log(result);
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
