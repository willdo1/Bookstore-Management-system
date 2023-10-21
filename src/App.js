import './index.css';
import React from "react";
import { useEffect, useContext  } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
import BooksContext from './content/books';
function App() {
    const { fetchBooks} = useContext(BooksContext);
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);
    
    return <div>
        <h1>Book List</h1>
            <BookList />
            <BookCreate />
        </div>;
}
export default App;