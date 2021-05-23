import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        {props.antonyms.map(function (antonym, index) {
          return (
            <button href="/" className="btn btn-custom m-1" key={index}>
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
