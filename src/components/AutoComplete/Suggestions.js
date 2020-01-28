import React from "react";

function Suggestions({ suggestions, setSelectedSuggestion }) {
 const isEmpty = !suggestions || suggestions.length === 0;
 function setSelection(event) {
  const { id } = event.currentTarget.dataset;
  setSelectedSuggestion(suggestions[id]);
 }
 if (isEmpty) {
  return (
   <ul>
    <li>No Suggestions!!!!</li>
   </ul>
  );
 } else {
  return (
   <ul>
    {suggestions.map((suggestion, index) => {
     return (
      <li key={index} data-id={index} onClick={setSelection}>
       {suggestion.title}
      </li>
     );
    })}
   </ul>
  );
 }
}

export default Suggestions;
