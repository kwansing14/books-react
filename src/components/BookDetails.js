import React, { useContext } from 'react';
import { useBook } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useBook();
  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">
        <div>{book.author}</div>
        <button onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default BookDetails;
