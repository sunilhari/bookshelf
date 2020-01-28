import React from "react";

function SearchInput({ input, setInput, selectBook }) {
 return (
  <div>
   <input type="text" onChange={setInput} value={input} />
   <button onClick={selectBook}>Submit</button>
  </div>
 );
}

export default SearchInput;
