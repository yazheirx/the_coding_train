// reference: https://youtu.be/QO4NXhWo_NM
// wordnik takes 7 days to send an API key, so will have to come back to this

let wordnikAPI = 'https://api.wordnik.com/v4words.json/randomW';
let giphyAPI = `http://api.giphy.com/v1/gifs/search?api_key=${apiKeys.giphy}&q=`;

function setup() {
     noCanvas();
     fetch(wordnikAPI)
          .then(res => res.json()) // fetch's response.json() function returns a promise
          .then(json => {
               createP(json.word);
               return fetch(giphyAPI + json.word);
          }) // thus this .then is for handling the return  res.json
          .then(res => res.json) // Note: this is taking the return form line 13
          .then(json => createImg(json.data[0].images['fixed_height_small'].url))
          .catch(err => console.error(err));
}

// Callback method
// function setup() {
//      noCanvas();
//      loadJSON(wordnikAPI, gotData);
// }

// function gotData(data) {
//      createP(data.word);
//      loadJSON(giphyAPI + data.word, gotDataData);
// }

// function gotDataData(data) {
//      console.log(data.data[0].images);
//      createImg(data.data[0].images['fixed_height_small'].url);
// }
