import React from "react";

function SelectedBooks({ selectedBooks }) {
 const isEmpty = !selectedBooks || selectedBooks.length === 0;
 if (!isEmpty) {
  return (
   <table>
    <thead>
     <tr>
      <th>id</th>
      <th>title</th>
      <th>query</th>
     </tr>
    </thead>
    <tbody>
     {selectedBooks.map((book, index) => {
      return (
       <tr key={index}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.query}</td>
       </tr>
      );
     })}
    </tbody>
   </table>
  );
 }
 return null;
}

export default SelectedBooks;
