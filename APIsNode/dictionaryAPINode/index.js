const axios = require("axios");

const [word = "word"] = process.argv.slice(2);

const url = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`;
const {my_app_id} =require("./keys"); 
const {my_app_key} = require("./keys");

axios
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