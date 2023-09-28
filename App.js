import React from "react";
import "./App.css";
import myImage from "../src/Photo/Screenshot 2023-09-25 111119.png";
import Card from "./Component/Card/Card";
import Question2 from "./Component/Card/Question2/Question2";
import RadioBtn from "./Component/Card/Question2/RadioBtn/RadioBtn";
import Questions3 from "./Component/Card/Question2/Questions3/Questions3";
import Questions4 from "./Component/Card/Question2/Questions3/Questions4/Questions4";
import Axios from "axios";
import { useState, useEffect } from "react";
import Questions5 from "./Component/Card/Question2/Questions3/Questions4/Questions5/Questions5";
import VideoQuestion from "./Component/Card/Question2/Questions3/Questions4/Questions5/VideoQuestion/VideoQuestion";

function App(formData) {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get(
      "https://www.dropbox.com/s/cf92anqoqlg6p19/Application%20Form.yaml?dl=0"
    )
      .then((response) => {
        setData(response.data); // Assuming the API response is JSON
        console.log("render");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const cardStyle = {
    // width: '18rem',
  };

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
      <div className="App text-start">
        <h1 className="text">
          View of how <br />
          additional <br />
          questions will look{" "}
        </h1>
        <div className="card mx-5" style={cardStyle}>
          <img src={myImage} className="card-img-top" alt="#" />
          <div className="card-body">
            <button className="btn-close" aria-label="Close"></button>
            <span className="card1" aria-hidden="true">
              Delete & re-upload
            </span>
          </div>
        </div>
        <Card />
        <Question2 />
        <RadioBtn />
        <Questions3 />
        <Questions4 />
        <Questions5 />
        <VideoQuestion />
      </div>
    </div>
  );
}

export default App;
