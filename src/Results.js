import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Images from "./Images";

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
            {props.results.word} <br />
            <span className="phonetic-info">
              /{props.results.phonetics[0].text}/
              <button className="audio-button" value="play" onClick={play}>
                <i class="fas fa-volume-up"></i>
              </button>
            </span>
          </h2>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}

          <h3>Images</h3>
          <Images photos={props.photos} word={props.results.word} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
