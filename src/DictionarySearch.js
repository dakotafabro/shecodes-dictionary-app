import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [keywordData, setKeywordData] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);

    setKeywordData({
      word: response.data[0].word,
      definition: response.data[0].meanings[0].definitions[0].definition,
      antonyms: response.data[0].meanings[0].definitions[0].antonyms,
      example: response.data[0].meanings[0].definitions[0].example,
      synonyms: response.data[0].meanings[0].definitions[0].synonyms,
      partOfSpeech: response.data[0].meanings[0].partOfSpeech,
      origin: response.data[0].origin,
      phoneticText: response.data[0].phonetics[0].text,
      phoneticAudio: response.data[0].phonetics[0].oxford_audio,
    });
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en-US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch mt-5 mb-5 shadow">
      <form className="m-5" onSubmit={search}>
        <div className="row">
          <input
            className="search-field col-sm-9"
            type="search"
            onChange={handleKeyword}
            placeholder="Search for a word"
          />
          <button className="submit-button col-sm-3" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      <Results results={keywordData} />
    </div>
  );
}