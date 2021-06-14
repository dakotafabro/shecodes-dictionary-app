import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  const search = (event) => {
    props.search(event);
  };

  const changeKeyword = (event) => {
    props.handleClickedKeyword(event.target.value);
    search(event);
  };

  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <button
              className="btn btn-custom m-1"
              key={index}
              onClick={changeKeyword}
              value={synonym}
            >
              {synonym}
            </button>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
