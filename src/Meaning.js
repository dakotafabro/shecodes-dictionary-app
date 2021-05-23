import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props.meaning);
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
            <p>
              <em>{definition.example}</em>
            </p>
            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>

            <p>
              <Antonyms antonyms={definition.antonyms} />
            </p>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
