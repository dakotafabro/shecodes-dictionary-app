import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  let [keywordData, setKeywordData] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
    <div className="DictionarySearch mt-3 shadow">
      <form className="m-5" onSubmit={search}>
        <div className="row">
          <input
            className="search-field col-sm-10"
            type="search"
            onChange={handleKeyword}
            placeholder="Search for a word"
          />
          <input
            className="submit-button col-sm-2"
            type="submit"
            value="Define"
          />
        </div>
      </form>
    </div>
  );
}
