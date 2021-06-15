import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { useBook } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useBook();

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
};

export default BookList;
