import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  const changeKeyWord = (event) => {
    props.handleClickedKeyword(event.target.value);
    props.search(event);
  };

  if (props.antonyms) {
    return (
      <div className="Antonyms">
        {props.antonyms.map(function (antonym, index) {
          return (
            <button
              className="btn btn-custom m-1"
              key={index}
              onClick={changeKeyWord}
              value={antonym}
            >
              {antonym}
            </button>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
