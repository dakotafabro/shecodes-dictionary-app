import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(" ");

  function search(event) {
    event.preventDefault();
    console.log(keyword);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form className="m-3" onSubmit={search}>
        <input
          className="search-field"
          type="search"
          onChange={handleKeyword}
          placeholder="Search for a word"
        />
        <input className="submit-button" type="submit" value="Define" />
      </form>
    </div>
  );
}
