import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <div className="Images">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="keyword-photos img-fluid m-3"
                    alt={photo.src.tiny}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
