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
                <img
                  src={photo.src.tiny}
                  className="keyword-photos img-fluid m-3"
                  alt={photo.src.tiny}
                />
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
