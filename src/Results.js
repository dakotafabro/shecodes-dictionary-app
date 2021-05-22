import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    let audio = props.results.phoneticAudio;

    function play() {
      new Audio(audio).play();
    }

    return (
      <div className="Results p-5">
        <h1 className="main-keyword-info mb-3">
          {props.results.word} ({props.results.phoneticText}) / (
          {props.results.partOfSpeech})
          <button className="audio-button" value="play" onClick={play}>
            <i class="fas fa-volume-up"></i>
          </button>
        </h1>
        <h3>Definition:</h3>
        <p>{props.results.definition}</p>

        <h3>Origin:</h3>
        <p>{props.results.origin}</p>

        <h3>Example:</h3>
        <p>{props.results.example}</p>

        <h3>Synonyms:</h3>
        <p>{props.results.synonyms}</p>

        <h3>Antonyms:</h3>
        <p>{props.results.antonyms}</p>
      </div>
    );
  } else {
    return null;
  }
}
