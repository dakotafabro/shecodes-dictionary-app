import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {/* <h5>Synonyms</h5> */}
        {props.synonyms.map(function (synonym, index) {
          return (
            <button href="/" className="btn btn-custom m-1" key={index}>
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