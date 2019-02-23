// reference: https://youtu.be/BztW_u6HDbs
// wordnik takes 7 days to send an API key, so will have to come back to this

let wordnikAPI = `https://api.wordnik.com/v4words.json/randomWord?&api_key=${
     apiKeys.wordnikAPI
}`;
let giphyAPI = `http://api.giphy.com/v1/gifs/search?api_key=${apiKeys.giphy}&q=`;

function setup() {
     noCanvas();
     let promises = [];
     for (let i = 2; i < 10; i++) {
          promises.push(wordGif(i));
     }
     Promise.all(promises)
          .then(results => {
               createP(results.word);
               if (results.img !== null) {
                    createImg(results.img);
               }
          })
          .catch(err => console.err(err));
}

async function wordGif(num) {
     let response1 = await fetch(wordnikAPI + '&minLength=' + num + '&maxLength=' + num);
     let json1 = await response1.json();
     let response2 = fetch(giphyAPI + json1.word);
     let json2 = await response2.json();
     let img_url = null;
     try {
          img_url = json2.data[0].images['fixed_height_small'].url;
     } catch (error) {
          console.log(`No image found for ${json1.word}`);
          console.error(error);
     }

     return {
          word: json1.word,
          img: img_url
     };
}
