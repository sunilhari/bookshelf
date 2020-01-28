import React from "react";

function Card({ title, summary }) {
 return (
  <div className="card">
   <h1>{title}</h1>
   <p>{summary}</p>
  </div>
 );
}
export default Card;
