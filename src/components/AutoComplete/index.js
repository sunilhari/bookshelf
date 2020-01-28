import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import Suggestions from "./Suggestions";
import { search } from "./searchEngine";

function AutoComplete({ noOfSuggestions, addSelectedBook }) {
 const [input, setInput] = useState("");
 const [selected, setSelected] = useState("");
 const [suggestions, setSuggestions] = useState([]);
 const onTextInput = event => {
  setInput(event.target.value);
 };
 const setSelectedSuggestion = selection => {
  setSelected(selection);
 };
 const selectBook = () => {
  addSelectedBook(selected);
  setSelected("");
  setInput("");
 };
 useEffect(() => {
  const searchResult = search(input);
  setSuggestions(searchResult, noOfSuggestions);
 }, [input, noOfSuggestions]);

 useEffect(() => {
  const { title } = selected;
  setInput(title);
 }, [selected]);
 return (
  <>
   <SearchInput setInput={onTextInput} input={input} selectBook={selectBook} />
   <Suggestions
    suggestions={suggestions}
    setSelectedSuggestion={setSelectedSuggestion}
   />
  </>
 );
}

export default AutoComplete;
