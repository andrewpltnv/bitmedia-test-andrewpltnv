import React from "react";

import mobile from "./mobile.svg"

const Header = (props) => {
  return(
    <header>
      <div className="text--header">
        <a href='/home'><h2 className="brand--name">AppCo</h2></a>
        <h1><strong>Brainstorming</strong> for desired perfect Usability</h1>
        <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
        <a href='/users'><button className="view--stats--button">Views Stats</button></a>
      </div>
      <img id="mobile" src={mobile} alt="Iphone X"/>
    </header>
  );
};

export default Header;
