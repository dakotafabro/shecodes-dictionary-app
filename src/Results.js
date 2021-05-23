import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    let audio = props.results.phonetics[0].oxford_audio;

    function play() {
      new Audio(audio).play();
    }

    return (
      <div className="Results">
        <div className="container">
          <h2 className="main-keyword-info mb-3">
            {props.results.word} ({props.results.phonetics[0].text})
            <button className="audio-button" value="play" onClick={play}>
              <i class="fas fa-volume-up"></i>
            </button>
          </h2>

          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}

          <h3>Images:</h3>
          <p>(Images will go here)</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
