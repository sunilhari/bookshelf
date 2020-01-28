import React from "react";

function Card({ title, summary, author }) {
 return (
  <div className="card">
   <h1>{title}</h1>
   <p>{summary}</p>
   <hr />
   <p>{author}</p>
  </div>
 );
}
export default Card;
