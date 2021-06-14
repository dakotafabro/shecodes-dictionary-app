import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning mb-3">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h3>Definition</h3>
            <p>
              <strong>({props.meaning.partOfSpeech})</strong>{" "}
              {definition.definition}
            </p>
            <p className="example-sentence">
              <em>{definition.example}</em>
            </p>
            <p>
              <Synonyms
                synonyms={definition.synonyms}
                handleClickedKeyword={props.handleClickedKeyword}
                search={props.search}
              />
            </p>

            <p>
              <Antonyms
                antonyms={definition.antonyms}
                handleClickedKeyword={props.handleClickedKeyword}
                search={props.search}
              />
            </p>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
