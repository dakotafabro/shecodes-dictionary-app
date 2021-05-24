import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <button className="btn btn-custom m-1" key={index}>
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
