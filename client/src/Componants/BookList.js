// src/components/BookList.js

import React, { useState, useEffect } from 'react';
import { getBooks } from './Services.js';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Make the API call to fetch books
    getBooks()
      .then((response) => {
        console.log(response.data)
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
