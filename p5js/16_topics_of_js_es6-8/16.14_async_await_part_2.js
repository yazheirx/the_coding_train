// reference: https://youtu.be/chavThlNz3s
// wordnik takes 7 days to send an API key, so will have to come back to this

let wordnikAPI = `https://api.wordnik.com/v4words.json/randomWord?&minLength=5&maxLength=-1&api_key=${
     apiKeys.wordnikAPI
}`;
let giphyAPI = `http://api.giphy.com/v1/gifs/search?api_key=${apiKeys.giphy}&q=`;

function setup() {
     noCanvas();
     wordGif()
          .then(results => {
               createP(results.word);
               createImg(results.img);
          })
          .catch(err => console.error(err));
}

async function wordGif() {
     let response1 = await fetch(wordnikAPI);
     let json1 = await response1.json();
     let response2 = fetch(giphyAPI + json1.word);
     let json2 = await response2.json();
     let img_url = json2.data[0].images['fixed_height_small'].url;

     return {
          word: json1.word,
          img: img_url
     };
     //  fetch(wordnikAPI)
     //       .then(res => res.json()) // fetch's response.json() function returns a promise
     //       .then(json => {
     //            createP(json.word);
     //            return fetch(giphyAPI + json.word);
     //       }) // thus this .then is for handling the return  res.json
     //       .then(res => res.json) // Note: this is taking the return form line 13
     //       .then(json => createImg(json.data[0].images['fixed_height_small'].url))
     //       .catch(err => console.error(err));
}
