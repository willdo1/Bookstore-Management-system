import { useState} from "react";
import React from "react";
import useBooksContext from "../hooks/use-books-context";
function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const [quantity, setQuantity] = useState(book.quantity);
    const [price, setPrice] = useState(book.price);
    const [description, setDescription] = useState(book.description);
    const { editBookById } = useBooksContext();
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title, description, quantity, price);
        
    };
    return <form onSubmit={handleSubmit}>
        <label>
            Title
        </label>
        <input value={title} onChange={handleChange} />
        <label>
           Description
        </label>
        <input value={description} onChange={(e)=>setDescription(e.target.value)} />
        <label>
           quantity
        </label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <label>
        Price
        </label>
        <input value={price} onChange={(e)=>setPrice(e.target.value)} />
      
        <button>Save</button>
    </form>;
}
export default BookEdit;