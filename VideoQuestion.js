import React, { Component } from "react";
import "./../VideoQuestion/VideoQuestion.css";

export default class VideoQuestion extends Component {
  render() {
    const cardStyle = {
      width: "1000px",
    };

    return (
      <div className="card " style={cardStyle}>
        <div className="card-body1">
          <div className="colour">
            <h5 className="card-title colour:black fs-2">
              Video based questions
            </h5>
          </div>
          <div className="matter">
            <br />
            <br />

            <h6 class="text-secondary">4 minute</h6>

            <br />

            <input
              type="text"
              className="form-control px-2 fs-3 change"
              placeholder="Tell us about yourself?"
              aria-label="Text input with dropdown button"
            />
            <br />
            <h6 class="text-secondary">2 minute</h6>
            <input
              type="text"
              className="form-control px-2 fs-3 change"
              placeholder="Why did you apply for this program? "
              aria-label="Text input with dropdown button"
            />
            <br />
            <label className="fs-4  ">Questions</label>
            <br />
            <br />

            <input
              type="text"
              className="form-control px-2 fs-3"
              placeholder="Q: Tell us about yourself?"
              aria-label="Text input with dropdown button"
            />
            <br />
            <br />
            <div>
              <input
                type="text"
                className="input"
                placeholder="Please talk about your achievements, goals and what you worked on as the latest project."
              />
            </div>
            <br />
            <br />

            <div>
              <input
                type="text"
                className="video"
                placeholder="Max duration of video"
              />
            </div>
            <div>
              <input
                type="text"
                className="secound"
                placeholder="in (sec/min)"
              />
            </div>
            <br />
            <br />
            <br />
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
          <h4 className="lastText"> + Add video interview questions</h4>
        </div>
      </div>
    );
  }
}
