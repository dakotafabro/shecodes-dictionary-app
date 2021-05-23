import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <p className="Antonyms">
        <ul>
          <li>{props.antonyms[0]}</li>
          <li>{props.antonyms[1]}</li>
          <li>{props.antonyms[2]}</li>
        </ul>
      </p>
    );
  } else {
    return <div>n/a</div>;
  }
}
