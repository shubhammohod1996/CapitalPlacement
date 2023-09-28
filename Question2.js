import React, { Component } from "react";

export default class Question2 extends Component {
  render() {
    const cardStyle = {
      width: "1000px",
    };
    return (
      <div
        className="card d-flex justify-content-center align-items-center"
        style={cardStyle}
      >
        <div className="card-body1">
          <div className="colour">
            <h5 className="card-title colour:black fs-5">Questions</h5>
          </div>
          <div className="matter">
            {" "}
            <br />
            <label className="fs-4  ">Type</label>
            <br />
            <br />
            <input
              type="text"
              className="form-control px-2 fs-5"
              placeholder="Multiple choice "
              aria-label="Text input with dropdown button"
            />
            <br />
            <label className="fs-4  ">Questions</label>
            <br />
            <br />
            <input
              type="text"
              className="form-control px-2 fs-5"
              placeholder="type hear"
              aria-label="Text input with dropdown button"
            />
            <br />
            <br />
            <label className="choice fs-4 ">Choice</label>
            <br />
            <br />
            <input
              type="text"
              className="form-control px-2 fs-5"
              placeholder="Type hear"
              aria-label="Text input with dropdown button"
            />
            <br />
            <input type="checkbox" id="otherOption" />
            <label className="checkbox1"> Enable “Other” option</label>
            <br />
            <br />
            <label className="fs-4  ">Max choice allowed</label>
            <br />
            <br />
            <input
              type="text"
              className="form-control px-2 fs-5"
              placeholder="Enter number of choice allowed here"
              aria-label="Text input with dropdown button"
            />
            {/*  */}
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
}
