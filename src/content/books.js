import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }, []);
    const editBookById = async (id, newTitle, newDescription,newQuantity, newPrice) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
            description: newDescription,
            quantity: newQuantity,
            price: newPrice,
        });
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book;
        });
        setBooks(updateBooks);
    };
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };
    const BookCreate = async (title, description, quantity, price) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
            description,
            quantity,
            price
        });
        const updateBooks = [...books,
        response.data  
    ];
    setBooks(updateBooks);
    };
    const valueToshare = {
        books,
        deleteBookById,
        editBookById,
        BookCreate,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={valueToshare}>
        {children}

    </BooksContext.Provider>
    );
}
export { Provider };

export default BooksContext;