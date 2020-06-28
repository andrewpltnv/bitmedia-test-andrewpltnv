import React from "react";
import data from "./cardsdata";
import "./cards.scss";

const Cards = () => {
  return(
    <main className="centered--text">
      <h3 className="centered--text">Why <strong>small business owners love</strong> AppCo?</h3>
      <p className="centered--text">
        Our design projects are fresh and simple and will benefit your business greatly.
        Learn more about our work!
      </p>
      <div className="cards">
        {data.map((item)=>Card(item))}
      </div>
    </main>
  );
};
function Card(card){
  return(
    <div className="card">
      <img src={card.icon} alt="Card icon"/>
      <h4>{card.title}</h4>
      <p>{card.text}</p>
    </div>
  );
}

export default Cards;
