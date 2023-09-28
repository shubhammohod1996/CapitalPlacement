import React from "react";
import "./Card.css";

export default function Card() {
  const cardStyle = {
    width: "1000px",
  };

  return (
    <div className="card " style={cardStyle}>
      <div className="card-body1 ">
        <div className="colour">
          <h5 className="card-title colour:black fs-2 ">Questions</h5>
        </div>
        <div className="matter">
          <br />

          <label className="fs-4  ">Type</label>
          <br />
          <br />

          <input
            type="text"
            className="form-control px-2 fs-3"
            placeholder="paragraph"
            aria-label="Text input with dropdown button"
          />
          <br />

          <label className="fs-4  ">Questions</label>
          <br />
          <br />

          <input
            type="text"
            className="form-control px-2 fs-3"
            placeholder="type hear"
            aria-label="Text input with dropdown button"
          />
          <br />
          <br />
          <br />
          <br />

          <button className="btn-close" aria-label="Close red"></button>
          <span className="card1" aria-hidden="true">
            Delete questions
          </span>
        </div>
        <div className="last-button">
          <button type="button" class="btn btn-success">
            Right
          </button>
        </div>
      </div>
    </div>
  );
}
