const axios = require("axios");

//default word
const [word = "apply"] = process.argv.slice(2);

const url = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`;
const { my_app_id } = require("./keys");
const { my_app_key } = require("./keys");


// axios
//   .get(url, { headers: { app_id: my_app_id, app_key: my_app_key } })
//   .then(res => {

//     // data
//     const word = res.data.word;
//     const lexicalCategory = res.data.results[0].lexicalEntries[0].lexicalCategory.text;
//     const definitionArray = res.data.results[0].lexicalEntries[0].entries[0].senses
//       .map(def => def.definitions[0])
//     const definitions = definitionArray.map((def, ind) => `${ind + 1}. ${def}`);
//     const provider = res.data.metadata.provider;

//     console.log(word, "(" + lexicalCategory + ")");
//     console.log(definitions);
//     console.log(provider);

//   });


// //or in a async function using await

// (async () => {
//   await axios
//     .get(url, { headers: { app_id: my_app_id, app_key: my_app_key } })
//     .then(res => {

//       // data
//       const word = res.data.word;
//       const lexicalCategory = res.data.results[0].lexicalEntries[0].lexicalCategory.text;
//       const definitionArray = res.data.results[0].lexicalEntries[0].entries[0].senses
//         .map(def => def.definitions[0])
//       const definitions = definitionArray.map((def, ind) => `${ind + 1}. ${def}`);
//       const provider = res.data.metadata.provider;

//       console.log(word, "(" + lexicalCategory + ")");
//       console.log(definitions);
//       console.log(provider);

//     });
// })()

//or to be more clear, in two steps


const getWord = async () => {
  return axios
    .get(url, { headers: { app_id: my_app_id, app_key: my_app_key } })
    .then(res => {

      // data
      const word = res.data.word;
      const lexicalCategory = res.data.results[0].lexicalEntries[0].lexicalCategory.text;
      const definitionArray = res.data.results[0].lexicalEntries[0].entries[0].senses
        .map(def => def.definitions[0])
      const definitions = definitionArray.map((def, ind) => `${ind + 1}. ${def}`);
      const provider = res.data.metadata.provider;

      console.log(word, "(" + lexicalCategory + ")");
      console.log(definitions);
      console.log(provider);

    });
}

(async () => {
  console.log( getWord());
})()

//have a look at the console and u gona see the pending message = Promise { <pending> }