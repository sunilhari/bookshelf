import React from "react";
import Card from "./Card";
import "./Cards.css";

function Cards({ selectedBooks }) {
 const isEmpty = !selectedBooks || selectedBooks.length === 0;
 if (!isEmpty) {
  return (
   <>
    <h1>Cards</h1>
    <div className="card-container">
     {selectedBooks.map(({ title, summary }, index) => {
      return <Card key={index} title={title} summary={summary} />;
     })}
    </div>
   </>
  );
 }
 return null;
}

export default Cards;
