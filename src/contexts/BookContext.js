import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  }); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  const [books2, setBooks2] = useState('');

  useEffect(() => {
    // console.log(props.children);
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  return useContext(BookContext);
};

export default BookContextProvider;
