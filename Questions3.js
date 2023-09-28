import React, { Component } from "react";
import "./../Questions3/Questions3.css";

export default class Questions3 extends Component {
  render() {
    const cardStyle = {
      width: "1000px",
    };
    return (
      <div className="card" style={cardStyle}>
        <div className="card-body1">
          <div className="colour">
            <h5 className="card-title colour:black fs-2">Questions</h5>
          </div>
          <div className="matter">
            <br />
            <label className="fs-4  ">Type</label>
            <br />
            <br />

            <input
              type="text"
              className="form-control px-2 fs-5"
              placeholder="Dropdown "
              aria-label="Text input with dropdown button"
            />
            <br />

            <label className="fs-4  ">Question</label>
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
            <br />
            <br />

            {/*  */}

            <button className="btn-close" aria-label="Close red"></button>
            <span className="card1" aria-hidden="true">
              Delete question
            </span>
          </div>
          <div className="last-button">
            <button type="button" class="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
