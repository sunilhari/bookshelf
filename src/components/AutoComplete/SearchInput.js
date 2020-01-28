import React from "react";

function SearchInput({ input, setInput, selectBook }) {
 return (
  <div>
   <input
    type="text"
    onChange={setInput}
    value={input}
    placeholder="Search"
    data-testid="search-input"
   />
   <button onClick={selectBook}>Submit</button>
  </div>
 );
}
SearchInput.defaultProps = {
 input: ""
};
export default SearchInput;
