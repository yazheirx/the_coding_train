const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

server = app.listen(3000, listening);
app.use(express.static('website'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = fs.readFileSync('additional.json');
let words = JSON.parse(data);
let afinnData = fs.readFileSync('afinn111.json');
let afinn = JSON.parse(afinnData);

console.log('server is starting');

function listening() {
    console.log(`listening...`);
}

// a route "/add" with a parameters ":word" and ":score"
app.get('/add/:word/:score?', addWord);
app.get('/all', sendAll);
app.get('/search/:word', searchWord);
app.post('/analyse', analyseThis);

function analyseThis(req, res) {
    let totalScore = 0;
    let uniqueWords = [];
    let allWords = [];
    let txt = req.body.text;
    let wordList = txt.split(/\W+/);
    //     console.log(words);
    for (const word of wordList) {
        //    console.log(word);
        allWords.push(word);
        let score = 0;
        let found = false;
        if (words.hasOwnProperty(word)) {
            found = true;
            score = Number(words[word]);
        } else if (afinn.hasOwnProperty(word)) {
            found = true;
            score = Number(afinn[word]);
        }
        if (found) {
            uniqueWords.push({
                word: word,
                score: score
            });
        }
        totalScore += score;
    }
    let comp = totalScore / allWords.length;
    let reply = {
        score: totalScore,
        comparative: comp,
        uniqueWords: uniqueWords
    };
    res.send(reply);
}

function addWord(req, res) {
    let data = req.params;
    let word = data.word;
    let score = Number(data.score);
    let reply = '';
    if (!score) {
        reply = {
            msg: 'Score is required'
        };
        res.send(reply);
    } else {
        words[word] = score;
        fs.writeFile('additional.json', JSON.stringify(words, null, 2), finished);
        function finished(err) {
            if (err) {
                console.error(`File Write response ${err}`);
                reply = {
                    error: err
                };
            } else {
                reply = {
                    word: word,
                    score: score,
                    status: 'success'
                };
                console.log(reply);
            }
            res.send(reply);
        }
    }
}

function searchWord(req, res) {
    let word = req.params.word;
    let reply;
    if (words[word]) {
        reply = {
            status: 'found',
            word: word,
            score: words[word]
        };
    } else {
        reply = {
            status: 'word not found',
            word: word
        };
    }
    res.send(reply);
}

function sendAll(req, res) {
    var data = {
        additional: words,
        afinn: afinn
    };
    res.send(data);
}
