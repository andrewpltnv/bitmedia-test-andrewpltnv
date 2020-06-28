import React from "react";

import "./home.scss"
import mobile from "./mobile.svg"

const Home = (props) => {

  return(
    <main>
      <header>
        <div className="text--header">
          <h2 className="appco--main">AppCo</h2>
          <h1><strong>Brainstorming</strong> for desired perfect Usability</h1>
          <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <button className="view--stats--button">Views Stats</button>
        </div>
        <img id="mobile" src={mobile} alt="Iphone X"/>
      </header>
      <h3 className="centered--text">Why <strong>small business owners love</strong> AppCo?</h3>
    </main>
  );
};

export default Home;
