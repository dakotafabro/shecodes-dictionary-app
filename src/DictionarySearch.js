import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Footer from "./Footer";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [keywordData, setKeywordData] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleImageResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].antonyms);

    setKeywordData(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en-US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001632181a7bbe44e77bca3401bf7d1bf2e";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handleImageResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch mt-3 mb-5 shadow">
      <form className="keyword-search form-control-lg m-5" onSubmit={search}>
        <div className="row">
          <input
            className="search-field col-sm-11"
            type="search"
            onChange={handleKeyword}
            placeholder="Search for a word"
          />
          <button className="submit-button col-sm-1" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      <Results results={keywordData} photos={photos} />
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
