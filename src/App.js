import React, { useState } from "react";
import AutoComplete from "./components/AutoComplete";
import Cards from "./components/Cards";
import "./App.css";

function App() {
 const [selectedBooks, setSelectedBooks] = useState([]);

 function addSelectedBook(book) {
  const books = [...selectedBooks];
  books.push(book);
  setSelectedBooks(books);
 }
 return (
  <div className="App">
   <AutoComplete noOfSuggestions={2} addSelectedBook={addSelectedBook} />
   <Cards selectedBooks={selectedBooks} />
  </div>
 );
}

export default App;
